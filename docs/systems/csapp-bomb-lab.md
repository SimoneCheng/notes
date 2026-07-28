---
title: ［CSAPP］Bomb Lab 解題筆記
date: 2025-12-10
---

## :whale: GDB 常用指令

### :crab: 控制執行
```bash
break phase_1        # 在函數設中斷點
break *0x400ee0      # 在特定位址設中斷點
run                  # 開始執行
run < solution.txt   # 用檔案輸入執行
continue (c)         # 繼續執行到下個中斷點
ni                   # 執行一條指令（不進入函數）
si                   # 執行一條指令（會進入函數）
```

### :crab: 查看程式碼
```bash
disassemble          # 看當前函數的組語
disassemble phase_2  # 看指定函數的組語
layout asm           # 開啟組語視窗（視覺化）
layout regs          # 顯示暫存器視窗
ctrl + x, 再按 a      # 退出 layout
x/i $rip             # 看當前要執行的指令
```

### :crab: 查看資料
```bash
print $rax               # 看暫存器的值（十進位）
print/x $rax             # 看暫存器的值（十六進位）
info registers           # 看所有暫存器
info registers rdi rsi   # 只顯示特定暫存器
x/d $rsp                 # 看記憶體內容（十進位，預設 8 bytes）
x/dw $rsp                # 看記憶體內容（十進位，4 bytes = int）
x/6d $rsp                # 看 6 個數字
x/x $rsp                 # 看記憶體內容（十六進位）
x/s 0x402400             # 看記憶體內容（字串）
x/i $rip                 # 看記憶體內容（指令）
x/8a 0x402470            # 看 8 個位址（用於 jump table）
backtrace                # 顯示函數呼叫堆疊（call stack），看目前在哪個函數、是被誰呼叫的
bt                       # 顯示函數呼叫堆疊（call stack），看目前在哪個函數、是被誰呼叫的
where                    # 顯示函數呼叫堆疊（call stack），看目前在哪個函數、是被誰呼叫的
```

### :crab: 其他
```bash
quit (q)             # 離開 gdb
```

---

## :whale: x86-64 Assembly 基礎知識

### :crab: 常用暫存器與用途
```
函數參數傳遞（calling convention）：
%rdi  →  第 1 個參數
%rsi  →  第 2 個參數
%rdx  →  第 3 個參數
%rcx  →  第 4 個參數
%r8   →  第 5 個參數
%r9   →  第 6 個參數

其他重要暫存器：
%rax  →  函數返回值
%rsp  →  stack pointer（指向 stack 頂端）
%rbp  →  base pointer（stack frame 的基準）
%rip  →  instruction pointer（下一條要執行的指令）
```

### :crab: 指令語法（AT&T 格式）
```assembly
mov    %rsp,%rsi    # 把 %rsp 的值複製到 %rsi
                    # 格式：mov 來源, 目的地
add    %eax,%eax    # %eax = %eax + %eax（乘以 2）
```

### :crab: 記憶體存取語法
```assembly
(%rsp)              # 取 %rsp 指向的記憶體內容
0x4(%rsp)           # 取 %rsp + 4 的記憶體內容
-0x4(%rbx)          # 取 %rbx - 4 的記憶體內容
0x402470(,%rax,8)   # 計算：0x402470 + %rax * 8
```

### :crab: 比較和跳躍指令
```assembly
cmp    %eax,(%rbx)  # 比較 (%rbx) 和 %eax
je     地址          # jump if equal（相等就跳）
jne    地址          # jump if not equal（不相等就跳）
jg     地址          # jump if greater（大於就跳）
ja     地址          # jump if above（無號數大於）
jbe    地址          # jump if below or equal（小於等於就跳）
```

### :crab: 如何判斷暫存器是位址還是值

**關鍵：看有沒有括號**
- **有括號 `()` → 當作位址使用**
```assembly
  mov (%rsp),%eax    # 從 %rsp 指向的位址讀資料
```
- **沒括號 → 直接使用值**
```assembly
  mov %rsp,%eax      # 把 %rsp 的值（位址本身）複製給 %eax
```

**觀察使用模式**
- `add $0x4,%rbx` — 指標遞增 4 bytes → %rbx 是位址
- `add %eax,%eax` — 數值運算 → %eax 是值
- `lea 0x4(%rsp),%rbx` — Load Effective Address → 計算位址存到 %rbx

---

## :whale: Phase 1

```bash
(gdb) break phase_1
Breakpoint 1 at 0x400ee0
(gdb) run
Starting program: /home/simone/WorkSpace/ISLab/CSAPP/bomb/bomb 
This GDB supports auto-downloading debuginfo from the following URLs:
  <https://debuginfod.ubuntu.com>
Enable debuginfod for this session? (y or [n]) y
Debuginfod has been enabled.
To make this setting permanent, add 'set debuginfod enabled on' to .gdbinit.
[Thread debugging using libthread_db enabled]
Using host libthread_db library "/lib/x86_64-linux-gnu/libthread_db.so.1".
Welcome to my fiendish little bomb. You have 6 phases with
which to blow yourself up. Have a nice day!
aaa

Breakpoint 1, 0x0000000000400ee0 in phase_1 ()
(gdb) disassemble
Dump of assembler code for function phase_1:
=> 0x0000000000400ee0 <+0>:    sub    $0x8,%rsp
   0x0000000000400ee4 <+4>:    mov    $0x402400,%esi
   0x0000000000400ee9 <+9>:    call   0x401338 <strings_not_equal>
   0x0000000000400eee <+14>:    test   %eax,%eax
   0x0000000000400ef0 <+16>:    je     0x400ef7 <phase_1+23>
   0x0000000000400ef2 <+18>:    call   0x40143a <explode_bomb>
   0x0000000000400ef7 <+23>:    add    $0x8,%rsp
   0x0000000000400efb <+27>:    ret
End of assembler dump.
```

### :crab: 解題策略
這是最簡單的 phase，主要是字串比較。

### :crab: 解析步驟
1. **找關鍵參數**
   - 觀察 `mov $0x402400,%esi` 這行
   - `%esi` 是第二個參數，`0x402400` 是一個位址

2. **查看位址內容**

```bash
   (gdb) x/s 0x402400
   0x402400: "Border relations with Canada have never been better."
```

3. **理解程式邏輯**
   - 呼叫 `strings_not_equal` 函數比較兩個字串
   - 第一個參數（`%rdi`）是你的輸入
   - 第二個參數（`%rsi`）是 `0x402400` 的字串
   - 如果 `%eax == 0`（相等），就通過
   - 否則爆炸

## :whale: Phase 2

```bash
(gdb) break phase_2
Breakpoint 1 at 0x400efc
(gdb) run < solution.txt 
Starting program: /home/nvidia/Desktop/bomb/bomb < solution.txt
Welcome to my fiendish little bomb. You have 6 phases with
which to blow yourself up. Have a nice day!
Phase 1 defused. How about the next one?

Breakpoint 1, 0x0000000000400efc in phase_2 ()
(gdb) disassemble
Dump of assembler code for function phase_2:
=> 0x0000000000400efc <+0>:	push   %rbp
   0x0000000000400efd <+1>:	push   %rbx
   0x0000000000400efe <+2>:	sub    $0x28,%rsp
   0x0000000000400f02 <+6>:	mov    %rsp,%rsi
   0x0000000000400f05 <+9>:	callq  0x40145c <read_six_numbers>
   0x0000000000400f0a <+14>:	cmpl   $0x1,(%rsp)
   0x0000000000400f0e <+18>:	je     0x400f30 <phase_2+52>
   0x0000000000400f10 <+20>:	callq  0x40143a <explode_bomb>
   0x0000000000400f15 <+25>:	jmp    0x400f30 <phase_2+52>
   0x0000000000400f17 <+27>:	mov    -0x4(%rbx),%eax
   0x0000000000400f1a <+30>:	add    %eax,%eax
   0x0000000000400f1c <+32>:	cmp    %eax,(%rbx)
   0x0000000000400f1e <+34>:	je     0x400f25 <phase_2+41>
   0x0000000000400f20 <+36>:	callq  0x40143a <explode_bomb>
   0x0000000000400f25 <+41>:	add    $0x4,%rbx
   0x0000000000400f29 <+45>:	cmp    %rbp,%rbx
   0x0000000000400f2c <+48>:	jne    0x400f17 <phase_2+27>
   0x0000000000400f2e <+50>:	jmp    0x400f3c <phase_2+64>
   0x0000000000400f30 <+52>:	lea    0x4(%rsp),%rbx
   0x0000000000400f35 <+57>:	lea    0x18(%rsp),%rbp
   0x0000000000400f3a <+62>:	jmp    0x400f17 <phase_2+27>
   0x0000000000400f3c <+64>:	add    $0x28,%rsp
   0x0000000000400f40 <+68>:	pop    %rbx
   0x0000000000400f41 <+69>:	pop    %rbp
   0x0000000000400f42 <+70>:	retq   
End of assembler dump.
```

### :crab: 解題策略

這個 phase 檢查 6 個數字是否符合特定規律。需要理解迴圈結構。

### :crab: 解析步驟

1. **理解輸入**
   - 函數 `read_six_numbers` 會讀取 6 個整數
   - 這些數字存在 stack 上（從 `%rsp` 開始，每個佔 4 bytes）

2. **第一個數字的檢查**

```assembly
   cmpl   $0x1,(%rsp)    # 比較 (%rsp) 和 1
   je     0x400f30       # 相等就繼續
```

   → **第一個數字必須是 1**

3. **迴圈邏輯分析**（關鍵部分）

```assembly
   mov    -0x4(%rbx),%eax    # 取前一個數字
   add    %eax,%eax          # %eax = %eax + %eax（乘以 2！）
   cmp    %eax,(%rbx)        # 比較當前數字和 %eax
```

   - `add %eax,%eax` 等於把 %eax 乘以 2
   - 每個數字必須是前一個數字的 **2 倍**

4. **驗證推理**

```bash
   (gdb) x/6d $rsp      # 查看輸入的 6 個數字
   (gdb) ni             # 單步執行
   (gdb) print $eax     # 觀察計算結果
```

5. **推算數列**
   - 第 1 個：1
   - 第 2 個：1 × 2 = 2
   - 第 3 個：2 × 2 = 4
   - 第 4 個：4 × 2 = 8
   - 第 5 個：8 × 2 = 16
   - 第 6 個：16 × 2 = 32

## :whale: Phase 3

```bash
(gdb) break phase_3
Breakpoint 1 at 0x400f43
(gdb) run solution.txt 
Starting program: /home/nvidia/Desktop/bomb/bomb solution.txt
Welcome to my fiendish little bomb. You have 6 phases with
which to blow yourself up. Have a nice day!
Phase 1 defused. How about the next one?
That's number 2.  Keep going!

Breakpoint 1, 0x0000000000400f43 in phase_3 ()
(gdb) layout asm
(gdb) disassemble
No frame selected.
(gdb) run solution.txt 
Starting program: /home/nvidia/Desktop/bomb/bomb solution.txt
Welcome to my fiendish little bomb. You have 6 phases with
which to blow yourself up. Have a nice day!
Phase 1 defused. How about the next one?
That's number 2.  Keep going!

Breakpoint 1, 0x0000000000400f43 in phase_3 ()
(gdb) disassemble
Dump of assembler code for function phase_3:
=> 0x0000000000400f43 <+0>:	sub    $0x18,%rsp
   0x0000000000400f47 <+4>:	lea    0xc(%rsp),%rcx
   0x0000000000400f4c <+9>:	lea    0x8(%rsp),%rdx
   0x0000000000400f51 <+14>:	mov    $0x4025cf,%esi
   0x0000000000400f56 <+19>:	mov    $0x0,%eax
   0x0000000000400f5b <+24>:	callq  0x400bf0 <__isoc99_sscanf@plt>
   0x0000000000400f60 <+29>:	cmp    $0x1,%eax
   0x0000000000400f63 <+32>:	jg     0x400f6a <phase_3+39>
   0x0000000000400f65 <+34>:	callq  0x40143a <explode_bomb>
   0x0000000000400f6a <+39>:	cmpl   $0x7,0x8(%rsp)
   0x0000000000400f6f <+44>:	ja     0x400fad <phase_3+106>
   0x0000000000400f71 <+46>:	mov    0x8(%rsp),%eax
   0x0000000000400f75 <+50>:	jmpq   *0x402470(,%rax,8)
   0x0000000000400f7c <+57>:	mov    $0xcf,%eax
   0x0000000000400f81 <+62>:	jmp    0x400fbe <phase_3+123>
   0x0000000000400f83 <+64>:	mov    $0x2c3,%eax
   0x0000000000400f88 <+69>:	jmp    0x400fbe <phase_3+123>
   0x0000000000400f8a <+71>:	mov    $0x100,%eax
   0x0000000000400f8f <+76>:	jmp    0x400fbe <phase_3+123>
   0x0000000000400f91 <+78>:	mov    $0x185,%eax
   0x0000000000400f96 <+83>:	jmp    0x400fbe <phase_3+123>
   0x0000000000400f98 <+85>:	mov    $0xce,%eax
   0x0000000000400f9d <+90>:	jmp    0x400fbe <phase_3+123>
   0x0000000000400f9f <+92>:	mov    $0x2aa,%eax
   0x0000000000400fa4 <+97>:	jmp    0x400fbe <phase_3+123>
   0x0000000000400fa6 <+99>:	mov    $0x147,%eax
   0x0000000000400fab <+104>:	jmp    0x400fbe <phase_3+123>
   0x0000000000400fad <+106>:	callq  0x40143a <explode_bomb>
   0x0000000000400fb2 <+111>:	mov    $0x0,%eax
   0x0000000000400fb7 <+116>:	jmp    0x400fbe <phase_3+123>
   0x0000000000400fb9 <+118>:	mov    $0x137,%eax
   0x0000000000400fbe <+123>:	cmp    0xc(%rsp),%eax
   0x0000000000400fc2 <+127>:	je     0x400fc9 <phase_3+134>
   0x0000000000400fc4 <+129>:	callq  0x40143a <explode_bomb>
   0x0000000000400fc9 <+134>:	add    $0x18,%rsp
   0x0000000000400fcd <+138>:	retq   
End of assembler dump.

```

### :crab: 解題策略
這個 phase 使用 switch-case 結構，根據第一個數字決定第二個數字的值。有 8 組可能的答案。

### :crab: 解析步驟

1. **理解輸入格式**

```bash
(gdb) x/s 0x4025cf
0x4025cf: "%d %d"
```

- `sscanf` 讀取**兩個整數**
- 參數準備：
  - `%rdi`：輸入字串（你打的內容）
  - `%rsi`：格式字串 `"%d %d"`
  - `%rdx`：第一個整數的儲存位址（`%rsp+8`）
  - `%rcx`：第二個整數的儲存位址（`%rsp+12`）

2. **第一個數字的範圍限制**

```assembly
cmpl   $0x7,0x8(%rsp)    # 比較第一個數字和 7
ja     0x400fad          # 如果大於就爆炸
```

  → **第一個數字必須 `<=` 7**（即 0-7）

3. **Jump Table 的運作原理**

```assembly
jmpq   *0x402470(,%rax,8)
```

這是**間接跳躍**，實現 switch-case：
- `%rax` = 第一個數字（0-7）
- 計算位址：`0x402470 + %rax * 8`
- 從該位址**讀取跳躍目標**，然後跳過去

**查看 Jump Table：**
```bash
(gdb) x/8a 0x402470
0x402470:  0x400f7c     # case 0
0x402478:  0x400fb9     # case 1
0x402480:  0x400f83     # case 2
0x402488:  0x400f8a     # case 3
0x402490:  0x400f91     # case 4
0x402498:  0x400f98     # case 5
0x4024a0:  0x400f9f     # case 6
0x4024a8:  0x400fa6     # case 7
```

4. **各個 Case 的結構**

每個 case 都做一樣的事：
```assembly
mov    $某個數字,%eax     # 把期望值放到 %eax
jmp    0x400fbe          # 跳到共同檢查點
```

5. **共同檢查點：**

```assembly
cmp    0xc(%rsp),%eax    # 比較 %eax 和第二個輸入 (%rsp+12)
je     0x400fc9          # 相等就通過
callq  explode_bomb      # 否則爆炸
```

6. **找出對應關係**

從組語中可以看到 8 個 case 的期望值（十六進位）：

| Case | 組語位置 | %eax 值（hex） | 轉成十進位 |
|------|---------|---------------|-----------|
| 0    | +57     | 0xcf          | 207       |
| 1    | +118    | 0x137         | 311       |
| 2    | +64     | 0x2c3         | 707       |
| 3    | +71     | 0x100         | 256       |
| 4    | +78     | 0x185         | 389       |
| 5    | +85     | 0xce          | 206       |
| 6    | +92     | 0x2aa         | 682       |
| 7    | +99     | 0x147         | 327       |

## :whale: Phase 4

```bash
(gdb) break phase_4
Breakpoint 1 at 0x40100c
(gdb) run solution.txt 
Starting program: /home/simone/WorkSpace/ISLab/CSAPP/bomb/bomb solution.txt

This GDB supports auto-downloading debuginfo from the following URLs:
  <https://debuginfod.ubuntu.com>
Enable debuginfod for this session? (y or [n]) y
Debuginfod has been enabled.
To make this setting permanent, add 'set debuginfod enabled on' to .gdbinit.
[Thread debugging using libthread_db enabled]
Using host libthread_db library "/lib/x86_64-linux-gnu/libthread_db.so.1".
Welcome to my fiendish little bomb. You have 6 phases with
which to blow yourself up. Have a nice day!
Phase 1 defused. How about the next one?
That's number 2.  Keep going!
Halfway there!
1

Breakpoint 1, 0x000000000040100c in phase_4 ()
(gdb) disassemble
Dump of assembler code for function phase_4:
=> 0x000000000040100c <+0>:	sub    $0x18,%rsp
   0x0000000000401010 <+4>:	lea    0xc(%rsp),%rcx
   0x0000000000401015 <+9>:	lea    0x8(%rsp),%rdx
   0x000000000040101a <+14>:	mov    $0x4025cf,%esi
   0x000000000040101f <+19>:	mov    $0x0,%eax
   0x0000000000401024 <+24>:	call   0x400bf0 <__isoc99_sscanf@plt>
   0x0000000000401029 <+29>:	cmp    $0x2,%eax
   0x000000000040102c <+32>:	jne    0x401035 <phase_4+41>
   0x000000000040102e <+34>:	cmpl   $0xe,0x8(%rsp)
   0x0000000000401033 <+39>:	jbe    0x40103a <phase_4+46>
   0x0000000000401035 <+41>:	call   0x40143a <explode_bomb>
   0x000000000040103a <+46>:	mov    $0xe,%edx
   0x000000000040103f <+51>:	mov    $0x0,%esi
   0x0000000000401044 <+56>:	mov    0x8(%rsp),%edi
   0x0000000000401048 <+60>:	call   0x400fce <func4>
   0x000000000040104d <+65>:	test   %eax,%eax
   0x000000000040104f <+67>:	jne    0x401058 <phase_4+76>
   0x0000000000401051 <+69>:	cmpl   $0x0,0xc(%rsp)
   0x0000000000401056 <+74>:	je     0x40105d <phase_4+81>
   0x0000000000401058 <+76>:	call   0x40143a <explode_bomb>
   0x000000000040105d <+81>:	add    $0x18,%rsp
   0x0000000000401061 <+85>:	ret
End of assembler dump.

(gdb) disassemble
Dump of assembler code for function func4:
=> 0x0000000000400fce <+0>:	sub    $0x8,%rsp
   0x0000000000400fd2 <+4>:	mov    %edx,%eax
   0x0000000000400fd4 <+6>:	sub    %esi,%eax
   0x0000000000400fd6 <+8>:	mov    %eax,%ecx
   0x0000000000400fd8 <+10>:	shr    $0x1f,%ecx
   0x0000000000400fdb <+13>:	add    %ecx,%eax
   0x0000000000400fdd <+15>:	sar    $1,%eax
   0x0000000000400fdf <+17>:	lea    (%rax,%rsi,1),%ecx
   0x0000000000400fe2 <+20>:	cmp    %edi,%ecx
   0x0000000000400fe4 <+22>:	jle    0x400ff2 <func4+36>
   0x0000000000400fe6 <+24>:	lea    -0x1(%rcx),%edx
   0x0000000000400fe9 <+27>:	call   0x400fce <func4>
   0x0000000000400fee <+32>:	add    %eax,%eax
   0x0000000000400ff0 <+34>:	jmp    0x401007 <func4+57>
   0x0000000000400ff2 <+36>:	mov    $0x0,%eax
   0x0000000000400ff7 <+41>:	cmp    %edi,%ecx
   0x0000000000400ff9 <+43>:	jge    0x401007 <func4+57>
   0x0000000000400ffb <+45>:	lea    0x1(%rcx),%esi
   0x0000000000400ffe <+48>:	call   0x400fce <func4>
   0x0000000000401003 <+53>:	lea    0x1(%rax,%rax,1),%eax
   0x0000000000401007 <+57>:	add    $0x8,%rsp
   0x000000000040100b <+61>:	ret
End of assembler dump.
```

### :crab: 解題策略
這個 phase 包含遞迴函數 `func4`，實作二分搜尋邏輯。需要理解遞迴呼叫和返回值的計算。

### :crab: 解析步驟

1. 理解輸入格式
和 Phase 3 類似，使用 `sscanf` 讀取兩個整數。

2. func4 的參數
從 phase_4 呼叫 func4 時：
```assembly
mov    0x8(%rsp),%edi     # 第 1 參數 = 第一個輸入
mov    $0x0,%esi          # 第 2 參數 = 0
mov    $0xe,%edx          # 第 3 參數 = 14
call   func4
```

3. func4 的邏輯結構
**計算中點（Binary Search 的核心）：**
```assembly
mov    %edx,%eax          # %eax = high (14)
sub    %esi,%eax          # %eax = high - low
mov    %eax,%ecx          
shr    $0x1f,%ecx         # 處理符號位（這裡是 0）
add    %ecx,%eax          
sar    $1,%eax            # 除以 2
lea    (%rax,%rsi,1),%ecx # %ecx = mid = (low + high) / 2
```

這段計算：`mid = (low + high) / 2`

**三路分支判斷：**
分支 1：mid > target（搜尋左半邊）
```assembly
cmp    %edi,%ecx          # 比較 mid 和 target
jle    0x400ff2           # 如果 mid <= target，跳到分支 2
lea    -0x1(%rcx),%edx    # high = mid - 1
call   func4              # 遞迴：func4(target, low, mid-1)
add    %eax,%eax          # 返回值 *= 2
jmp    0x401007           # 返回
```

分支 2：mid == target（找到目標）
```assembly
mov    $0x0,%eax          # 返回值 = 0
cmp    %edi,%ecx          # 比較 mid 和 target
jge    0x401007           # 如果 mid >= target，返回
```

分支 3：mid < target（搜尋右半邊）
```assembly
lea    0x1(%rcx),%esi     # low = mid + 1
call   func4              # 遞迴：func4(target, mid+1, high)
lea    0x1(%rax,%rax,1),%eax  # 返回值 = 返回值 * 2 + 1
```

4. 追蹤遞迴過程
**使用 `si` 進入遞迴：**
```bash
(gdb) break func4
(gdb) run
# 輸入前面的答案...
1 0    # 測試答案

(gdb) si              # 用 si 而不是 ni！
(gdb) backtrace       # 查看遞迴深度
(gdb) info registers  # 查看參數變化
```

**自動追蹤遞迴呼叫：**
```bash
(gdb) break func4
(gdb) commands
> silent
> printf "func4(%d, %d, %d), mid=%d\n", $edi, $esi, $edx, ($esi+$edx)/2
> continue
> end
```

5. 推導有效答案
**關鍵觀察：** 只有當輸入等於某次計算的 mid 值時，才會走分支 2，返回 0。

初始呼叫：`func4(target, 0, 14)`

**可能的 mid 值：**
```
第 1 層：mid = (0 + 14) / 2 = 7
第 2 層：mid = (0 + 6) / 2 = 3  或  mid = (8 + 14) / 2 = 11
第 3 層：mid = (0 + 2) / 2 = 1  或  mid = (4 + 6) / 2 = 5
第 4 層：mid = (0 + 0) / 2 = 0  或  mid = (2 + 2) / 2 = 2
```

**但只有在「自然分裂」路徑上的 mid 會返回 0：**

從 14 開始不斷除以 2：
```
14 / 2 = 7
7 / 2 = 3
3 / 2 = 1
1 / 2 = 0
```

→ **第一個輸入只能是：0, 1, 3, 7**

6. 驗證答案

**測試不同輸入：**
```bash
# 有效答案
0 0  ✅
1 0  ✅
3 0  ✅
7 0  ✅

# 無效答案（會經過分支 3，返回值非 0）
2 0  ❌
5 0  ❌
```

**驗證過程（以輸入 1 為例）：**
```
第 1 次：func4(1, 0, 14) → mid=7, 7>1 → 分支 1 → func4(1, 0, 6)
第 2 次：func4(1, 0, 6)  → mid=3, 3>1 → 分支 1 → func4(1, 0, 2)
第 3 次：func4(1, 0, 2)  → mid=1, 1==1 → 分支 2 → 返回 0
回到第 2 次：返回值 = 0 * 2 = 0
回到第 1 次：返回值 = 0 * 2 = 0
```

**答案（4 選 1）**
```
0 0
1 0  ← 我選這組
3 0
7 0
```

第二個數字必須是 0（phase_4 會檢查）。

**學習重點**
- **理解遞迴函數的分析方法**
  - 找 base case（終止條件）
  - 找 recursive case（遞迴呼叫）
  - 追蹤參數如何改變
  
- **使用 gdb 追蹤遞迴**
  - `si` 進入函數（vs `ni` 跳過函數）
  - `backtrace` 查看呼叫堆疊
  - 觀察每層遞迴的參數變化

- **二分搜尋的組語實作**
  - 計算中點：`(low + high) / 2`
  - 三路分支：小於、等於、大於
  - 遞迴縮小搜尋範圍

- **返回值的計算規律**
  - 分支 2（找到）：返回 0
  - 分支 1（左半）：返回值 * 2
  - 分支 3（右半）：返回值 * 2 + 1

**重要 GDB 指令補充**
```bash
backtrace (bt)          # 顯示函數呼叫堆疊
info registers          # 顯示所有暫存器值
info registers rdi rsi  # 只顯示特定暫存器
finish                  # 執行完當前函數返回上一層
```

**額外觀察**
這個 phase 展示了：
- 遞迴函數在組語中的樣子
- 如何通過返回值編碼不同的路徑
- 為什麼某些看似合理的輸入會失敗（不在二分搜尋的「自然路徑」上）

## :whale: Phase 5

```bash
(gdb) break phase_5
Breakpoint 1 at 0x401062
(gdb) run solution.txt 
Starting program: /home/nvidia/Desktop/bomb/bomb solution.txt
Welcome to my fiendish little bomb. You have 6 phases with
which to blow yourself up. Have a nice day!
Phase 1 defused. How about the next one?
That's number 2.  Keep going!
Halfway there!
So you got that one.  Try this one.

Breakpoint 1, 0x0000000000401062 in phase_5 ()
(gdb) disassemble
Dump of assembler code for function phase_5:
=> 0x0000000000401062 <+0>:	push   %rbx
   0x0000000000401063 <+1>:	sub    $0x20,%rsp
   0x0000000000401067 <+5>:	mov    %rdi,%rbx
   0x000000000040106a <+8>:	mov    %fs:0x28,%rax
   0x0000000000401073 <+17>:	mov    %rax,0x18(%rsp)
   0x0000000000401078 <+22>:	xor    %eax,%eax
   0x000000000040107a <+24>:	callq  0x40131b <string_length>
   0x000000000040107f <+29>:	cmp    $0x6,%eax
   0x0000000000401082 <+32>:	je     0x4010d2 <phase_5+112>
   0x0000000000401084 <+34>:	callq  0x40143a <explode_bomb>
   0x0000000000401089 <+39>:	jmp    0x4010d2 <phase_5+112>
   0x000000000040108b <+41>:	movzbl (%rbx,%rax,1),%ecx
   0x000000000040108f <+45>:	mov    %cl,(%rsp)
   0x0000000000401092 <+48>:	mov    (%rsp),%rdx
   0x0000000000401096 <+52>:	and    $0xf,%edx
   0x0000000000401099 <+55>:	movzbl 0x4024b0(%rdx),%edx
   0x00000000004010a0 <+62>:	mov    %dl,0x10(%rsp,%rax,1)
   0x00000000004010a4 <+66>:	add    $0x1,%rax
   0x00000000004010a8 <+70>:	cmp    $0x6,%rax
   0x00000000004010ac <+74>:	jne    0x40108b <phase_5+41>
   0x00000000004010ae <+76>:	movb   $0x0,0x16(%rsp)
   0x00000000004010b3 <+81>:	mov    $0x40245e,%esi
   0x00000000004010b8 <+86>:	lea    0x10(%rsp),%rdi
   0x00000000004010bd <+91>:	callq  0x401338 <strings_not_equal>
   0x00000000004010c2 <+96>:	test   %eax,%eax
   0x00000000004010c4 <+98>:	je     0x4010d9 <phase_5+119>
   0x00000000004010c6 <+100>:	callq  0x40143a <explode_bomb>
   0x00000000004010cb <+105>:	nopl   0x0(%rax,%rax,1)
   0x00000000004010d0 <+110>:	jmp    0x4010d9 <phase_5+119>
   0x00000000004010d2 <+112>:	mov    $0x0,%eax
   0x00000000004010d7 <+117>:	jmp    0x40108b <phase_5+41>
   0x00000000004010d9 <+119>:	mov    0x18(%rsp),%rax
   0x00000000004010de <+124>:	xor    %fs:0x28,%rax
   0x00000000004010e7 <+133>:	je     0x4010ee <phase_5+140>
   0x00000000004010e9 <+135>:	callq  0x400b30 <__stack_chk_fail@plt>
   0x00000000004010ee <+140>:	add    $0x20,%rsp
   0x00000000004010f2 <+144>:	pop    %rbx
   0x00000000004010f3 <+145>:	retq   
End of assembler dump.
```

### :crab: 解題邏輯
輸入 6 個字元 → 每個字元取低 4 bits 當索引 → 查表轉換 → 必須變成 "flyers"

### :crab: 關鍵指令解析

**1. 長度檢查 (+24 ~ +34)**
```asm
callq  0x40131b <string_length>
cmp    $0x6,%eax
je     0x4010d2 <phase_5+112>
callq  0x40143a <explode_bomb>
```
- 輸入必須是 6 個字元

**2. 初始化 loop counter (+112)**
```asm
mov    $0x0,%eax
jmp    0x40108b <phase_5+41>
```
- `%eax` = 0（迴圈計數器）

**3. 核心轉換迴圈 (+41 ~ +74)**
```asm
movzbl (%rbx,%rax,1),%ecx      # 讀取輸入字串第 i 個字元
mov    %cl,(%rsp)              # 暫存到 stack
mov    (%rsp),%rdx             # 讀回到 %rdx
and    $0xf,%edx               # 取低 4 bits (0-15)
movzbl 0x4024b0(%rdx),%edx     # 查表！key instruction
mov    %dl,0x10(%rsp,%rax,1)   # 存結果到 stack offset 0x10
add    $0x1,%rax               # i++
cmp    $0x6,%rax               # 迴圈 6 次
jne    0x40108b <phase_5+41>
```

**關鍵概念：**
- `and $0xf, %edx`：只保留字元的低 4 bits
- `0x4024b0(%rdx)`：base + index 定址，從查表陣列取字元
- 轉換後的字串存在 `%rsp + 0x10`

**4. 字串比較 (+76 ~ +100)**
```asm
movb   $0x0,0x16(%rsp)         # 加 null terminator
mov    $0x40245e,%esi          # "flyers" 字串位址
lea    0x10(%rsp),%rdi         # 轉換後的字串
callq  0x401338 <strings_not_equal>
test   %eax,%eax
je     0x4010d9 <phase_5+119>  # 相等就通過
callq  0x40143a <explode_bomb>
```

### :crab: 解題步驟

**1. 查看查表陣列**
```gdb
(gdb) x/s 0x4024b0
```
找出索引 0-15 對應的字元

**2. 反推輸入**
- 目標：'f', 'l', 'y', 'e', 'r', 's'
- 找出查表陣列中這些字母的索引位置
- 找任意 ASCII 字元，其低 4 bits 等於這些索引

**3. 驗證**
```gdb
(gdb) break *0x4010bd
(gdb) x/s $rdi              # 檢查轉換結果
(gdb) x/s 0x40245e          # 確認目標是 "flyers"
```

### :crab: 新學到的指令

- **`movzbl src, dst`**：move zero-extend byte to long
  - 讀 1 byte，放進 32-bit 暫存器，高位補 0
  
- **`and $0xf, %reg`**：bit masking
  - 取最低 4 bits（範圍 0-15）
  
- **`addr(%base, %index, scale)`**：陣列定址
  - 計算：base + index × scale
  - 例：`0x4024b0(%rdx)` = 0x4024b0 + %rdx

## :whale: Phase 6

```bash
Breakpoint 1, 0x00000000004010f4 in phase_6 ()
(gdb) disassemble
Dump of assembler code for function phase_6:
=> 0x00000000004010f4 <+0>:	push   %r14
   0x00000000004010f6 <+2>:	push   %r13
   0x00000000004010f8 <+4>:	push   %r12
   0x00000000004010fa <+6>:	push   %rbp
   0x00000000004010fb <+7>:	push   %rbx
   0x00000000004010fc <+8>:	sub    $0x50,%rsp
   0x0000000000401100 <+12>:	mov    %rsp,%r13
   0x0000000000401103 <+15>:	mov    %rsp,%rsi
   0x0000000000401106 <+18>:	call   0x40145c <read_six_numbers>
   0x000000000040110b <+23>:	mov    %rsp,%r14
   0x000000000040110e <+26>:	mov    $0x0,%r12d
   0x0000000000401114 <+32>:	mov    %r13,%rbp
   0x0000000000401117 <+35>:	mov    0x0(%r13),%eax
   0x000000000040111b <+39>:	sub    $0x1,%eax
   0x000000000040111e <+42>:	cmp    $0x5,%eax
   0x0000000000401121 <+45>:	jbe    0x401128 <phase_6+52>
   0x0000000000401123 <+47>:	call   0x40143a <explode_bomb>
   0x0000000000401128 <+52>:	add    $0x1,%r12d
   0x000000000040112c <+56>:	cmp    $0x6,%r12d
   0x0000000000401130 <+60>:	je     0x401153 <phase_6+95>
   0x0000000000401132 <+62>:	mov    %r12d,%ebx
   0x0000000000401135 <+65>:	movslq %ebx,%rax
   0x0000000000401138 <+68>:	mov    (%rsp,%rax,4),%eax
   0x000000000040113b <+71>:	cmp    %eax,0x0(%rbp)
   0x000000000040113e <+74>:	jne    0x401145 <phase_6+81>
   0x0000000000401140 <+76>:	call   0x40143a <explode_bomb>
   0x0000000000401145 <+81>:	add    $0x1,%ebx
   0x0000000000401148 <+84>:	cmp    $0x5,%ebx
   0x000000000040114b <+87>:	jle    0x401135 <phase_6+65>
   0x000000000040114d <+89>:	add    $0x4,%r13
   0x0000000000401151 <+93>:	jmp    0x401114 <phase_6+32>
   0x0000000000401153 <+95>:	lea    0x18(%rsp),%rsi
--Type <RET> for more, q to quit, c to continue without paging--
   0x0000000000401158 <+100>:	mov    %r14,%rax
   0x000000000040115b <+103>:	mov    $0x7,%ecx
   0x0000000000401160 <+108>:	mov    %ecx,%edx
   0x0000000000401162 <+110>:	sub    (%rax),%edx
   0x0000000000401164 <+112>:	mov    %edx,(%rax)
   0x0000000000401166 <+114>:	add    $0x4,%rax
   0x000000000040116a <+118>:	cmp    %rsi,%rax
   0x000000000040116d <+121>:	jne    0x401160 <phase_6+108>

   0x000000000040116f <+123>:	mov    $0x0,%esi
   0x0000000000401174 <+128>:	jmp    0x401197 <phase_6+163>
   0x0000000000401176 <+130>:	mov    0x8(%rdx),%rdx
   0x000000000040117a <+134>:	add    $0x1,%eax
   0x000000000040117d <+137>:	cmp    %ecx,%eax
   0x000000000040117f <+139>:	jne    0x401176 <phase_6+130>
   0x0000000000401181 <+141>:	jmp    0x401188 <phase_6+148>
   0x0000000000401183 <+143>:	mov    $0x6032d0,%edx
   0x0000000000401188 <+148>:	mov    %rdx,0x20(%rsp,%rsi,2)
   0x000000000040118d <+153>:	add    $0x4,%rsi
   0x0000000000401191 <+157>:	cmp    $0x18,%rsi
   0x0000000000401195 <+161>:	je     0x4011ab <phase_6+183>
   0x0000000000401197 <+163>:	mov    (%rsp,%rsi,1),%ecx
   0x000000000040119a <+166>:	cmp    $0x1,%ecx
   0x000000000040119d <+169>:	jle    0x401183 <phase_6+143>
   0x000000000040119f <+171>:	mov    $0x1,%eax
   0x00000000004011a4 <+176>:	mov    $0x6032d0,%edx
   0x00000000004011a9 <+181>:	jmp    0x401176 <phase_6+130>

   0x00000000004011ab <+183>:	mov    0x20(%rsp),%rbx
   0x00000000004011b0 <+188>:	lea    0x28(%rsp),%rax
   0x00000000004011b5 <+193>:	lea    0x50(%rsp),%rsi
   0x00000000004011ba <+198>:	mov    %rbx,%rcx
   0x00000000004011bd <+201>:	mov    (%rax),%rdx
   0x00000000004011c0 <+204>:	mov    %rdx,0x8(%rcx)
   0x00000000004011c4 <+208>:	add    $0x8,%rax
--Type <RET> for more, q to quit, c to continue without paging--
   0x00000000004011c8 <+212>:	cmp    %rsi,%rax
   0x00000000004011cb <+215>:	je     0x4011d2 <phase_6+222>
   0x00000000004011cd <+217>:	mov    %rdx,%rcx
   0x00000000004011d0 <+220>:	jmp    0x4011bd <phase_6+201>
   0x00000000004011d2 <+222>:	movq   $0x0,0x8(%rdx)
   0x00000000004011da <+230>:	mov    $0x5,%ebp
   0x00000000004011df <+235>:	mov    0x8(%rbx),%rax
   0x00000000004011e3 <+239>:	mov    (%rax),%eax
   0x00000000004011e5 <+241>:	cmp    %eax,(%rbx)
   0x00000000004011e7 <+243>:	jge    0x4011ee <phase_6+250>
   0x00000000004011e9 <+245>:	call   0x40143a <explode_bomb>
   0x00000000004011ee <+250>:	mov    0x8(%rbx),%rbx
   0x00000000004011f2 <+254>:	sub    $0x1,%ebp
   0x00000000004011f5 <+257>:	jne    0x4011df <phase_6+235>
   0x00000000004011f7 <+259>:	add    $0x50,%rsp
   0x00000000004011fb <+263>:	pop    %rbx
   0x00000000004011fc <+264>:	pop    %rbp
   0x00000000004011fd <+265>:	pop    %r12
   0x00000000004011ff <+267>:	pop    %r13
   0x0000000000401201 <+269>:	pop    %r14
   0x0000000000401203 <+271>:	ret
End of assembler dump.
```

### :crab: 解題邏輯
輸入 6 個數字（1-6 且不重複）→ 轉換成 `7-x` → 根據轉換值選擇對應的 node(指標陣列) → 重排 linked list → 檢查 node 的值是否遞減

### :crab: 完整 Assembly Code 分析

#### 第一段：函數初始化 (+0 ~ +18)
```asm
push   %r14
push   %r13
push   %r12
push   %rbp
push   %rbx
sub    $0x50,%rsp              # 分配 80 bytes stack 空間
mov    %rsp,%r13               # r13 = stack 起始位址
mov    %rsp,%rsi               # rsi = 第二個參數（輸出陣列位址）
call   0x40145c <read_six_numbers>
```

關鍵概念：
- 保存 callee-saved registers
- `read_six_numbers(input_string, output_array)`
  - 第一個參數 `%rdi`：輸入字串（在進入 phase_6 前已設定）
  - 第二個參數 `%rsi`：目的地陣列位址（stack）
  - 函數內部用 `sscanf` 解析，將 6 個整數寫入 `%rsi` 指向的位置

#### 第二段：檢查數字範圍與唯一性 (+23 ~ +93)

外層迴圈：檢查每個數字是否在 1-6 範圍內 (+32 ~ +60)
```asm
mov    %rsp,%r14               # r14 = 陣列起始位址（備份）
mov    $0x0,%r12d              # r12d = 外層迴圈計數器 i = 0
mov    %r13,%rbp               # rbp = 當前元素位址

# Loop 1 開始:
mov    0x0(%r13),%eax          # eax = array[i]
sub    $0x1,%eax               # eax = array[i] - 1
cmp    $0x5,%eax               # 檢查 (array[i] - 1) <= 5
jbe    0x401128                # 通過（即 1 <= array[i] <= 6）
call   explode_bomb            # 否則爆炸

add    $0x1,%r12d              # i++
cmp    $0x6,%r12d              # i == 6?
je     0x401153                # 是，跳到下一段
```

內層迴圈：檢查數字不重複 (+62 ~ +93)
```asm
mov    %r12d,%ebx              # ebx = i + 1（從下一個開始比較）
movslq %ebx,%rax               # rax = ebx（符號擴展到 64-bit）
mov    (%rsp,%rax,4),%eax      # eax = array[j]（第 j 個元素）
cmp    %eax,0x0(%rbp)          # 比較 array[i] == array[j]?
jne    0x401145                # 不相等，繼續
call   explode_bomb            # 相等，爆炸（重複了）

add    $0x1,%ebx               # j++
cmp    $0x5,%ebx               # j <= 5?
jle    0x401135                # 繼續內層迴圈

add    $0x4,%r13               # r13 += 4（移到下一個元素）
jmp    0x401114                # 回到外層迴圈
```

等價 C 程式碼：
```c
// 外層迴圈：檢查範圍
for (i = 0; i < 6; i++) {
    if (array[i] < 1 || array[i] > 6) {
        explode_bomb();
    }
    
    // 內層迴圈：檢查不重複
    for (j = i + 1; j <= 5; j++) {
        if (array[i] == array[j]) {
            explode_bomb();
        }
    }
}
```

關鍵指令解析：
- `(%rsp,%rax,4)`：陣列定址 = `rsp + rax × 4`（因為 int 是 4 bytes）
- `0x0(%rbp)`：當前比較的基準元素
- `movslq`：move with sign-extension long to quad（帶符號擴展）

#### 第三段：轉換成 7-x (+95 ~ +121)
```asm
lea    0x18(%rsp),%rsi         # rsi = 陣列結尾位址（rsp + 24）
mov    %r14,%rax               # rax = 陣列起始位址

# Loop:
mov    $0x7,%ecx               # ecx = 7
mov    %ecx,%edx               # edx = 7
sub    (%rax),%edx             # edx = 7 - array[i]
mov    %edx,(%rax)             # array[i] = 7 - array[i]
add    $0x4,%rax               # 移到下一個元素
cmp    %rsi,%rax               # 處理完 6 個了嗎？
jne    0x401160                # 繼續迴圈
```

為什麼是 `0x18`？
- 6 個 int × 4 bytes = 24 (0x18) bytes
- `%rsp + 0x18` 是陣列的結束位置（下一個位址）

#### 第四段：根據轉換值找對應的 Node (+123 ~ +161)

Stack 記憶體佈局：
```
%rsp + 0x00: [輸入陣列]  int[6]，每個 4 bytes，共 24 bytes
%rsp + 0x20: [Node 指標陣列] ptr[6]，每個 8 bytes，共 48 bytes
%rsp + 0x50: 指標陣列結尾
```

迴圈初始化 (+123):
```asm
mov    $0x0,%esi               # esi = 0（陣列索引）
jmp    0x401197
```

主要邏輯 (+163 ~ +161):
```asm
# 讀取轉換後的數字
mov    (%rsp,%rsi,1),%ecx      # ecx = array[i]（7-x 的值）
cmp    $0x1,%ecx               # ecx <= 1?
jle    0x401183                # 是，直接用 node1

# ecx > 1，需要走 linked list
mov    $0x1,%eax               # eax = 1（counter：目前在第幾個 node）
mov    $0x6032d0,%edx          # edx = node1 位址
jmp    0x401176

# 走訪 linked list (+130 ~ +139)
mov    0x8(%rdx),%rdx          # rdx = rdx->next
add    $0x1,%eax               # counter++
cmp    %ecx,%eax               # counter == ecx?
jne    0x401176                # 否，繼續走
jmp    0x401188                # 是，找到了

# 如果 ecx <= 1，直接用 node1 (+143)
mov    $0x6032d0,%edx          # edx = node1

# 存 node 指標到新陣列 (+148)
mov    %rdx,0x20(%rsp,%rsi,2)  # node_ptr_array[i] = rdx
add    $0x4,%rsi               # i += 4（索引遞增）
cmp    $0x18,%rsi              # i == 24?（處理完 6 個）
je     0x4011ab                # 是，結束
jmp    0x401197                # 繼續下一個
```

關鍵概念：

1. Linked List 結構：
   ```c
   struct node {
       int value;        // offset 0x0
       struct node *next; // offset 0x8
   };
   ```

2. 走訪 Linked List：
   ```asm
   mov 0x8(%rdx),%rdx    # rdx = rdx->next
   ```
   - 透過 offset `0x8` 讀取 next pointer
   - 不是連續記憶體，是透過指標跳轉

3. 為什麼 `0x20(%rsp,%rsi,2)` 但 `add $0x4,%rsi`？
   - 讀輸入：`(%rsp,%rsi,1)` → `rsp + rsi × 1`
   - 寫指標：`0x20(%rsp,%rsi,2)` → `rsp + 0x20 + rsi × 2`
   - `%rsi` 每次 +4：
     - 第 1 次：rsi=0 → 讀 `rsp[0]`，寫 `rsp+0x20[0]`
     - 第 2 次：rsi=4 → 讀 `rsp[4]`，寫 `rsp+0x20[8]`
     - 第 3 次：rsi=8 → 讀 `rsp[8]`，寫 `rsp+0x20[16]`
   - 這樣同時遍歷兩個陣列（輸入陣列 vs 指標陣列）

等價 C 程式碼：
```c
node* node_array[6];  // 在 stack offset 0x20

for (i = 0; i < 6; i++) {
    int steps = array[i];  // 7-x 的值
    
    if (steps <= 1) {
        node_array[i] = node1;
    } else {
        node* current = node1;
        for (j = 1; j < steps; j++) {
            current = current->next;
        }
        node_array[i] = current;
    }
}
```

#### 第五段：重排 Linked List (+183 ~ +222)

初始化 (+183 ~ +193):
```asm
mov    0x20(%rsp),%rbx         # rbx = node_array[0]（第一個 node）
lea    0x28(%rsp),%rax         # rax = &node_array[1]（第二個指標位址）
lea    0x50(%rsp),%rsi         # rsi = 陣列結尾位址（停止條件）
```

為什麼結尾是 `0x50`？
```
起點：0x20（32）
6 個指標 × 8 bytes = 48 (0x30)
結尾：0x20 + 0x30 = 0x50（80）

16 進位加法（不是 10 進位）：
0x20 → 0x28 → 0x30 → 0x38 → 0x40 → 0x48 → 0x50
（每次 +8，因為指標是 8 bytes）
```

串連迴圈 (+198 ~ +220):
```asm
mov    %rbx,%rcx               # rcx = 當前 node
mov    (%rax),%rdx             # rdx = 下一個 node（從陣列讀指標）
mov    %rdx,0x8(%rcx)          # current->next = next（設定 next pointer）
add    $0x8,%rax               # rax += 8（移到陣列下一個指標）
cmp    %rsi,%rax               # 到結尾了嗎？
je     0x4011d2                # 是，結束
mov    %rdx,%rcx               # rcx = next（準備下次迴圈）
jmp    0x4011bd                # 繼續
```

收尾 (+222):
```asm
movq   $0x0,0x8(%rdx)          # 最後一個 node->next = NULL
```

關鍵指令解析：
- `mov (%rax),%rdx`：間接定址，讀取 `%rax` 指向的記憶體內容
  - 等同於 C 語言的 `*rax`
- `mov %rdx,0x8(%rcx)`：設定 next pointer
  - 等同於 `current->next = next`

#### 第六段：檢查遞減順序 (+230 ~ +257)

```asm
mov    $0x5,%ebp               # ebp = 5（迴圈 5 次，檢查 5 對相鄰節點）

# Loop:
mov    0x8(%rbx),%rax          # rax = 下一個 node（rbx->next）
mov    (%rax),%eax             # eax = 下一個 node 的 value
cmp    %eax,(%rbx)             # 當前 value >= 下一個 value?
jge    0x4011ee                # 是，通過
call   explode_bomb            # 否，爆炸（必須遞減！）

mov    0x8(%rbx),%rbx          # rbx = rbx->next（移到下一個 node）
sub    $0x1,%ebp               # 計數器--
jne    0x4011df                # 繼續迴圈
```

### :crab: 解題步驟

1. 查看 Linked List 的值
```gdb
(gdb) x/3xg 0x6032d0    # node1: value 和 next
(gdb) x/3xg 0x6032e0    # node2
(gdb) x/3xg 0x6032f0    # node3
(gdb) x/3xg 0x603300    # node4
(gdb) x/3xg 0x603310    # node5
(gdb) x/3xg 0x603320    # node6
```

範例輸出：
```
node1: value = 332 (0x14c), next = 0x6032e0
node2: value = 168 (0xa8),  next = 0x6032f0
node3: value = 924 (0x39c), next = 0x603300
node4: value = 691 (0x2b3), next = 0x603310
node5: value = 477 (0x1dd), next = 0x603320
node6: value = 443 (0x1bb), next = 0x000000
```

2. 找出遞減順序
```
值從大到小：924 > 691 > 477 > 443 > 332 > 168
對應 node：  3     4     5     6     1     2
```

3. 反推輸入（考慮 7-x 轉換）
```
要得到 node3，輸入 7-3 = 4
要得到 node4，輸入 7-4 = 3
要得到 node5，輸入 7-5 = 2
要得到 node6，輸入 7-6 = 1
要得到 node1，輸入 7-1 = 6
要得到 node2，輸入 7-2 = 5

答案：4 3 2 1 6 5
```

4. 驗證
```gdb
(gdb) break *0x4011ab    # 重排前
(gdb) break *0x4011df    # 檢查遞減迴圈
(gdb) x/6xg 0x20($rsp)   # 檢查指標陣列順序
(gdb) x/xw $rbx          # 檢查當前 node 的 value
```

### :crab: 重要概念整理

#### 1. 陣列 vs Linked List 的辨識

陣列特徵：
```asm
mov %rdx, 0x20(%rsp,%rsi,2)    # base + index × scale
add $0x4, %rsi                 # 固定間隔遞增
```
- 連續定址：`base + offset`
- 規律存取
- 通常在 stack 上

Linked List 特徵：
```asm
mov 0x8(%rdx),%rdx             # 透過 next pointer
```
- 透過 offset `0x8` 跳轉（next pointer）
- 不規律位址
- 通常在靜態記憶體（固定位址如 `0x6032d0`）

#### 2. 間接定址 (Dereference)

```asm
mov (%rax),%eax
```
- 讀取 `%rax` **指向的記憶體內容**
- 等同於 C 語言的 `*rax`

範例：
```
假設 %rax = 0x6032d0
記憶體 0x6032d0 存的值是 332

mov (%rax),%eax  → %eax = 332
```

#### 3. 16 進位計算

組語中所有 `0x` 開頭的數字都是 16 進位：

```
0x20 + 8 = 0x28  （不是 28）
0x28 + 8 = 0x30  （不是 36）
0x30 + 8 = 0x38
...
```

GDB 小技巧：
```gdb
(gdb) p/x 0x28 + 8
$1 = 0x30
```

#### 4. Stack Canary（可忽略）

```asm
mov    %fs:0x28,%rax           # 讀 canary
mov    %rax,0x18(%rsp)         # 存到 stack
...
xor    %fs:0x28,%rax           # 檢查
je     正常返回
call   __stack_chk_fail        # canary 被改 → 爆炸
```
- 防止 buffer overflow
- 解題時可忽略

### :crab: GDB 除錯技巧

1. 設定多個 breakpoint 跳過已知段落
```gdb
(gdb) break *0x401153    # 轉換 7-x 前
(gdb) break *0x4011ab    # 重排 linked list 前
(gdb) break *0x4011df    # 檢查遞減前
(gdb) continue           # 跳到下個 breakpoint
```

2. 查看記憶體內容
```gdb
(gdb) x/6wd $rsp         # 看輸入陣列（6 個 word，decimal）
(gdb) x/6xg 0x20($rsp)   # 看指標陣列（6 個 8-byte，hex）
(gdb) x/3xg 0x6032d0     # 看 node 結構
```

3. 儲存 breakpoints
```gdb
(gdb) save breakpoints phase6.bp
(gdb) source phase6.bp   # 下次載入
```

4. 設定 convenience variable
```gdb
(gdb) set $node1 = 0x6032d0
(gdb) x/3xg $node1
```

### :crab: 新學到的指令

1. `movzbl src, dst`
   - Move zero-extend byte to long
   - 讀 1 byte，放進 32-bit 暫存器，高位補 0

2. `movslq src, dst`
   - Move sign-extend long to quad
   - 帶符號擴展：32-bit → 64-bit

3. `lea addr, dst`
   - Load effective address
   - 計算位址但不讀取記憶體
   - 常用於指標運算

4. 定址模式：`offset(%base, %index, scale)`
   - 計算：`base + offset + index × scale`
   - 範例：
      - `0x20(%rsp,%rsi,2)` = `rsp + 0x20 + rsi × 2`
      - `(%rsp,%rax,4)` = `rsp + rax × 4`

### :crab: 小結

Phase 6 的難點：
1. 程式碼很長（~110 行）
2. 多層迴圈嵌套
3. 需要理解 linked list 資料結構
4. 涉及指標操作和間接定址
5. 需要逆向推理（從結果反推輸入）

解題關鍵：
1. 分段理解：不要一次看完，標記每段功能
2. 追蹤暫存器：了解每個暫存器的用途
3. 善用 GDB：實際執行比光看程式碼更清楚
4. 畫圖輔助：畫出 linked list 結構和轉換過程
5. 耐心除錯：慢慢追蹤，一步步驗證

## :whale: x86-64 assembly cheat sheet
- https://web.stanford.edu/class/cs107/resources/x86-64-reference.pdf

:::tip
本筆記經與 Claude (Anthropic) 討論整理而成，包含組語指令解析、GDB 操作技巧與除錯思路。
:::
