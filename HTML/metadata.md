# metadata、`<meta>` 知多少

{docsify-updated} 

- [metadata、`<meta>` 知多少](#metadatameta-知多少)
  - [:whale: 前言](#whale-前言)
  - [:whale: metadata 是什麼？](#whale-metadata-是什麼)
  - [:whale: metadata 有哪些？](#whale-metadata-有哪些)
    - [:crab: `<title>`](#crab-title)
    - [:crab: `<link>`](#crab-link)
      - [將 `CSS` 檔引入（Load Stylesheets）](#將-css-檔引入load-stylesheets)
      - [加入網頁 Logo（Add a Favicon）](#加入網頁-logoadd-a-favicon)
      - [標準網址 （Canonical URL）](#標準網址-canonical-url)
    - [:crab: `<base>`](#crab-base)
    - [:crab: `<script>`](#crab-script)
    - [:crab: `<meta>`](#crab-meta)
  - [:whale: 淺談 `<meta>`](#whale-淺談-meta)
    - [:crab: name、content](#crab-namecontent)
    - [:crab: charset](#crab-charset)
    - [:crab: http-equiv](#crab-http-equiv)
    - [:crab: Open Graph](#crab-open-graph)
  - [:whale: 結語](#whale-結語)
  - [:whale: 參考資源](#whale-參考資源)

## :whale: 前言

今天想要研究的主題是，網頁前端世界裡的三本柱 ── `HTML`、`CSS`、`JavaScript` 之中的 `HTML`。雖然 `HTML` 並非如同 `JavaScript` 有很多程式語言相關的主題與議題能夠探討，但是也是有一些有趣的主題值得研究和探索。

之前在寫 side project 或是技術面試被問到該如何優化 SEO 時，當時只有辦法大概回答出可以透過 `HTML` 當中的 metadata 去優化 SEO，但是並不清楚 metadata 實際上有哪些用法，或是可以做到哪些事情，所以這次想要試著以一種更詳細和全面的角度來理解 `HTML` 當中會使用到的 metadata 和 `<meta>` 這兩個東西。（當然有機會的話，之後也想要寫一個 SEO 的系列文來理解 SEO 和知道如何優化它）

本文架構如下：
- **metadata 是什麼？** → 首先會先定義 metadata 是什麼
- **metadata 有哪些？** → 接著解釋 metadata 在 `HTML` 當中的應用
- **淺談 `<meta>`** → 最後會對 `<meta>` 這個用法做更深入的研究

你可能要有的先備知識：
- 知道 `HTML` 是什麼
- 了解 `<head>` 和 `<body>` 的差別

## :whale: metadata 是什麼？

首先可以先從現有的網路資源當中，去尋找 metadata 的定義。在 MDN 文件當中，解釋了什麼是 metadata：

> **Metadata** is — in its very simplest definition — data that describes data. For example, an HTML document is data, but HTML can also contain metadata in its `<head>` element that describes the document — for example who wrote it, and its summary.

直接翻譯的話，metadata 的意思就是「描述資料」的資料，這樣子聽起來可能還是一頭霧水，但如果我們以一個實際的例子來說明的話，可能會清楚許多。

假設現在有一個猜拳遊戲網頁的 `HTML` 檔，架構如下：

```html
<!DOCTYPE html>
<html lang="zh-Hant-TW">
    <head>
        <!-- metadata, 使用者不會看到，但是會提供這個 HTML 檔相關的資訊，例如以下四行 -->
        <meta charset="UTF-8">
        <meta name="description" content="猜拳遊戲">
        <link rel="stylesheet" href="style.css">
        <title>Rock_Paper_Scissors Game</title>
    </head>
    <body>
        <!-- 使用者會看到的內容 -->
        <header></header>
        <main></main>
        <footer></footer>
    </body>
</html>
```

通常在 `<body>` 這個標籤中會放滿希望讓使用者看到的畫面；另外將描述這個網頁的資訊，比如這個網頁的作者、這個網頁的用途、這個網頁的編碼方式、要套用的 `css` 檔、要套用的 `JavaScript` 檔等等，放在 `<head>` 這個標籤當中。

這些放在 `<head>` 當中的資訊，並且用來描述這個 `HTML` 網頁檔是要用來做什麼、或是要運行什麼東西，都可以稱之為 metadata。通常這些 metadata 的資訊會被搜尋引擎的爬蟲爬取並解析，於是我們可以在這裡很簡單地暴力推測：如果 metadata 寫得越完整，對 SEO 的幫助越大，也可以說是優化 SEO 的方法之一。

## :whale: metadata 有哪些？

在上一個小節理解 metadata 的定義之後，那接下來的問題就是：實際上要如何在 `HTML` 當中寫出 metadata 呢？這也是本小節試圖回答和整理的問題。

### :crab: `<title>`

在每個 `HTML` 檔的 `<head>` 當中，基本上一定都會有 `<title>` 這個標籤（tag），它的語法如下：
```html
<title>Insert Title Here | Follow it with the Website Name if you Wish</title>
```

藉由 `title` 這個標籤，可以讓搜尋引擎知道這個網頁的名稱，並將它顯示在搜尋結果頁上面。或是也可以在瀏覽器的頁籤上看到 `<title>` 的內容，讓使用者知道自己目前在哪個網頁，比如說進到臉書首頁時，在瀏覽器頁籤上看到 Facebook 字樣，是因為 `<title>Facebook</title>` 的緣故。 

### :crab: `<link>`

`<link>` 這個標籤的用途蠻多元的，目前我自己最常用到的是將 `CSS` 檔引入到 `HTML` 當中，讓網頁上的元素可以套用樣式，除此之外還有一些其他的用途，例如：加入網頁的 Logo、用標準網址（Canonical URL）整合重複性的網址等等。

#### 將 `CSS` 檔引入（Load Stylesheets）

平常在撰寫網頁時，除了需要 `HTML` 來建立網頁的架構，也會需要 `CSS` 來讓網頁上的內容套用美美的樣式，通常會將 `CSS` 樣式寫在另外一個檔案裡，再引入到 `HTML` 當中，可以使用以下語法來引入：

```html
<link href="[fileName].css" rel="stylesheet">
```

#### 加入網頁 Logo（Add a Favicon）

打開一個網頁時，頁籤上除了會顯示 `<title>` 中的網頁名稱之外，也會看到在網頁名稱前面有個小小的 Logo（叫做 favicon），這個小小的 Logo 可以透過以下方式來新增到網頁當中：

```html
<link href="favicon.ico" rel="icon">
```

隨著網路不斷演進，目前客戶端有多種瀏覽器和設備，所以 favicon 為了演進的需要也提供的多種置入的方式，比如不一定要用 .ico 的格式， .png、.svg 也可以，每個瀏覽器或是設備當中看到的 favicon 最佳大小可能也不相同。由於本文學習和研究的重心主要是在 `<meta>` ，對這部分的內容可能不夠詳盡，若想深入了解的話，也許可以參考這則在 stackoverflow 上的討論：[HTML 5 Favicon - Support?](https://stackoverflow.com/questions/23849377/html-5-favicon-support)。

#### 標準網址 （Canonical URL）

假設目前有以下的網址：

```
http://www.example.com/
http://www.example.com/index.html
http://example.com/
http://example.com/index.html
```

但其實這些網址連到的都是同一個網頁，或是在不同網頁上提供相似度極高的內容（例如：行動版和電腦版的網頁，兩者是不同網址但內容幾乎相同）。Google 搜尋引擎便會將這些不同的網址視為相同網頁的重複版本，從中選出一個網址作為「標準」版本進行檢索，然後將其他網址判定為「重複」網址並降低搜尋引擎爬取的頻率。

如果我們沒有設定一個標準網址的話，Google 搜尋引擎本身就會自己幫我們決定一個標準網址。為了避免這件事情發生，我們其實可以透過以下語法來設定一個自己想要的標準網址：

```html
<link rel="canonical" href="http://www.example.com/" />
```

這也是 `<link>` 的用途之一。有關標準網址相關資訊，可以參考 Google 搜尋中心的說明：[整合重複的網址](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls)。更多有關 `<link>`詳細的屬性解說可以參考 MDN 文件：[link: The External Resource Link element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)、[Link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)。

### :crab: `<base>`

`<base>` 標籤主要是控制網頁的連結屬性，可以指定網頁的連結根目錄，也可以指定網頁超連結的開啟方式，屬性有 href、target。我們可以直接來看以下兩個範例：

```html
<html>
  <head>
      <title>這是標題</title>
      <!-- HTML base href, target 範例設定 -->
      <base href="https://www.example.com" target="_blank">
  </head>
  <body>
      <a href="products">產品資訊</a>
      <a href="about-us">關於我們</a>
      <a href="faq">問與答</a>
  </body>
</html>
```

```html
<html>
  <head>
      <title>這是標題</title>
  </head>
  <body>
      <a href="https://www.example.com/products" target="_blank">產品資訊</a>
      <a href="https://www.example.com/about-us" target="_blank">關於我們</a>
      <a href="https://www.example.com/faq" target="_blank">問與答</a>
  </body>
</html>
```

以上兩個程式碼達成的效果其實是相同的。上面的程式碼有使用 `<base>`，直接指定整個網頁的連結開頭，還有這個網頁按下超連結時會使用開啟新分頁的方式，所以就不需要針對每一個 `<a>` 進行處理；下面的程式碼沒有使用 `<base>`，所以便會針對每一個 `<a>` 進行處理。

另外需要注意的是：只要有設定 `<base>` 的 `href`，任何網頁中的連結都會被它給覆蓋過去。更多有關 `<base>` 的用法可以參考這些資源：[base html 標籤是什麼? html tag 設定網頁連結 - SEAN 工作版](https://seanacnet.com/html/base-html/)、[base: The Document Base URL element - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)。

### :crab: `<script>`

可以使用 `<script>` 這個標籤來引入 JavaScript，執行一些這個 `HTML` 網頁所需要的程式碼，比如 CDN 、Gooogle Analytics、網頁互動邏輯等等，可以使用以下兩種不同的方式引入：

```html
// 方法一：直接將 JavaSript 寫在裡面
<script> 
 <!-- 要執行的 JavaScript -->
</script>

// 方法二：插入一個 JavaScript 檔
<script src="[folder_name]/[file_name].js"></script>
```

另外在使用 `<script>` 這個標籤時，可以特別注意某些屬性是怎麼使用的，比如說：**`defer` 和 `async` 的差別**、**`type="module"` 怎麼用**等等。更多詳細的屬性解說可以參考 MDN 文件：[script: The Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)。

### :crab: `<meta>`

除了上述使用到的標籤之外，可能也還有很多 metadata 需要寫進 `HTML` 檔裡，比如這個網頁的編碼方式、這個網頁的作者、這個網頁的描述等等，這些都可以使用 `<meta>` 這個標籤來實現。簡單來說，除了前面提到的標籤以及它們的用途之外，其他的 metadata 都可以寫在 `<meta>` 這個標籤中，在下一個部分會針對 `<meta>` 的屬性做更詳細的理解與介紹。

## :whale: 淺談 `<meta>`

在這個部分會一一介紹幾個 `<meta>` 當中常用到的 attribute，了解這些 attribute 的用途。

### :crab: name、content

首先第一個登場的 attribute 就是 name 和 content。name 和 content 可以用來描述一個網站的資訊，像是這個網站的作者、這個網站的描述、圖片等等，通常這兩者可以寫在一起，比如下面的範例：

```html
<meta name="author" content="Simone">
<meta name="description" content="This is my page">
<meta name="image" content="xxx.jpg">
```

這三行程式碼如果直接寫成中文的話，大概呈現的方式如下：

```
作者：Simone
網站描述：This is my page
圖片：xxx.jpg
```

同時，這些資訊也可以讓搜尋引擎查詢，讓搜尋引擎知道這個網頁到底是什麼樣的網頁。

另外有一個可能需要特別注意的地方：

```html
<meta name="keywords" content="html, css, javascript">
```

以往 name 有一個 keywords 的寫法，表示這個網站會用到的關鍵字，提供搜尋引擎尋找，但目前 Google 有說搜尋引擎目前不會查詢 keywords 了。所以如果有需要的話，可以改成寫在 meta description 當中。

### :crab: charset

charset 這個 attribute 是用來設定該網頁會用何種方式來進行編碼，比如以下的範例使用 utf-8 方式還進行編碼，也是目前網頁常用到的編碼方式。HTML5 預設的編碼方式也是 utf-8。（編碼的方式有非常多種，也許之後也可以寫筆記來研究研究）

```html
<meta charset="utf-8">
```

### :crab: http-equiv

http-equiv 會告訴瀏覽器該如何處理這份文件。

在對伺服器發出 request 之後，伺服器會回傳 reponse，通常 response 裡面會有 headers。在 `meta` 當中使用 http-equiv 時，http-equiv 所包含的資訊會類似於 reponse 傳回來的 headers，比如下面兩個範例的意思其實是差不多的：

```html
<!-- metadata in HTML -->
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
```

```
// 伺服器回傳的 headers
Content-Type: text/html; charset=utf-8
```

所以 http-equiv 可以理解成 HTTP response headers equivalent，當中的 equiv 其實就是 equivalent 的意思。

不過，HTTP response 不是都會有 headers ？為什麼還要在 HTML 文件放入類似的資訊？有可能使用者無法直接獲得 HTTP response headers，所以就需要靠 http-equiv 的資訊了。

http-equiv 還有另外一個用法是 refresh，可以設定幾秒過後重新整理，或是幾秒過後重新導向某個網址，比如以下的程式碼：

```html
<!-- 3 秒後重新整理頁面 -->
<meta http-equiv="refresh" content="3">

<!-- 5 秒後導向 http://www.example.com -->
<meta http-equiv="refresh" content="5; url=http://www.example.com">
```

> 目前 HTML5 請直接使用 `<meta charset="utf-8">`， `<meta http-equiv="content-type" content="text/html; charset=UTF-8">` 是 HTML4 在用的。

### :crab: Open Graph

平常在各個社群網站分享網址的時候，除了將一串網址貼到貼文上面之外，是不是還會看有一個區塊，上面會有你分享的網站的標題、敘述、圖片等等。

這部分就是用 Open Graph 辦到的，讓使用者在社群當中分享網站時，可以顯示美美的畫面，且只需要在 `<meta>` 當中寫下以下程式碼就可以辦到了：

```html
<meta property="og:title" content="Open Graph protocol">
<meta property="og:type" content="website">
<meta property="og:url" content="https://ogp.me/">
<meta property="og:image" content="https://ogp.me/logo.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="300">
<meta property="og:image:height" content="300">
<meta property="og:image:alt" content="The Open Graph logo">
<meta property="og:description" content="The Open Graph protocol enables any web page to become a rich object in a social graph.">
```

?> Open Graph 的官方文件由此去：https://ogp.me/

## :whale: 結語

以上就是這次對 metadata、`<meta>` 的小小研究，透過這次的撰寫，得到的收穫大概是：對 metadata 和 `<meta>` 有更詳細的了解。同時也可以理解 metadata 當中對 SEO 有幫助的部分，例如：整合標準網址、將 `<meta>` 的 description 寫的詳細一點等等。

## :whale: 參考資源

- [What Is Metadata In HTML Documents?: Head Elements Explained](https://html.com/document/metadata/)
- [What is metadata? - iT邦幫忙](https://ithelp.ithome.com.tw/articles/10237545)
- [What’s in the head? Metadata in HTML - mozilla](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [meta: The metadata element - mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
