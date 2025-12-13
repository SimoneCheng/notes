---
title: Bomb Lab 解題筆記
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

## :whale: x86-64 assembly cheat sheet
- https://web.stanford.edu/class/cs107/resources/x86-64-reference.pdf
