import Title from "../components/Title"
import { AppInfo, AppCard } from "./components/AppCard"

export const metadata = {
  title: "Apps - Masayoshi Mita",
}

export default function AppsPage() {
  return (
    <>
      <Title title="Apps" subtitle="（プライベートで）作ったもの" />
      <main className="container mx-auto">
        <article className="my-8 px-4">
          <section className="my-8">
            <h2 className="text-2xl font-bold mb-6">Packages / Libraries</h2>
            <Libraries />
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-bold mb-6">Chrome Extensions</h2>
            <ChromeExtensions />
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-bold mb-6">Desktop Apps</h2>
            <DesktopApps />
          </section>
        </article>
      </main>
    </>
  )
}

const Libraries = () => {
  const apps: AppInfo[] = [
    {
      name: "ordinalcorr",
      desc: "順序尺度の変数に対する相関係数を実装した Python パッケージ。",
      repoUrl: "https://github.com/nigimitama/ordinalcorr",
      siteUrl: "https://pypi.org/project/ordinalcorr/",
    },
    {
      name: "ksj",
      desc: "国土数値情報ダウンロードサービスAPI を簡単に使えるようにする python パッケージ（※API のサービス終了につき現在は使用できません）",
      repoUrl: "https://github.com/nigimitama/ksj",
      siteUrl: "https://pypi.org/project/ksj/",
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {apps.map((app, index) => {
        return <AppCard key={index} app={app} />
      })}
    </div>
  )
}

const ChromeExtensions = () => {
  const apps: AppInfo[] = [
    {
      name: "Link Generator",
      desc: "開いているページへのリンクを任意のフォーマット（markdown, html 等）で生成する拡張機能",
      repoUrl: "https://github.com/nigimitama/link-generator",
      siteUrl: "https://chromewebstore.google.com/detail/link-generator/dcepleilgmacpdjlcbgjaddnoejognkc",
      imageUrl: "https://github.com/nigimitama/link-generator/blob/main/images/image-20230308172514393.png?raw=true",
    },
    {
      name: "Tab Image Downloader",
      desc: "タブで開いている画像たちを一括ダウンロードする拡張機能",
      repoUrl: "https://github.com/nigimitama/tab-image-downloader/",
      siteUrl: "https://chromewebstore.google.com/detail/download-image-in-tabs/lgihlkigabibkibnobiigjnpibepoljo?hl=ja",
      imageUrl: "https://github.com/nigimitama/tab-image-downloader/blob/main/images/640.png?raw=true",
    },
    {
      name: "note-toc",
      desc: "note.com にて記事の目次を右端に固定表示する拡張機能",
      repoUrl: "https://github.com/nigimitama/note-toc",
      siteUrl: "https://chromewebstore.google.com/detail/dddpojfjpcidbebhjijlchdkfmegoidg?utm_source=item-share-cb",
      imageUrl: "https://github.com/nigimitama/note-toc/raw/main/images/image-20220130222521595.png",
    },
    {
      name: "Book Searcher",
      desc: "書籍情報を検索し、APA形式やBibTex形式などで引用しやすくする拡張機能",
      repoUrl: "https://github.com/nigimitama/book-searcher",
      siteUrl: "https://chromewebstore.google.com/detail/book-searcher/phkdhohknijcjmbpdcginagjiahakcee",
      imageUrl: "https://github.com/nigimitama/book-searcher/raw/main/docs/screenshot-640x400.png",
    },
    {
      name: "Confit to Calendar",
      desc: "Confit（学会イベント情報サイト）に「カレンダーに追加」というボタンを追加し、Google カレンダーへと予定を追加しやすくする Chrome 拡張機能",
      repoUrl: "https://github.com/nigimitama/confit-to-calendar",
      siteUrl: "https://chromewebstore.google.com/detail/confit-to-calendar/dinagahlibbjlffmalfopaihhgbciojo",
      imageUrl:
        "https://github.com/nigimitama/confit-to-calendar/blob/master/misc/images/confit-to-calendar-demo.gif?raw=true",
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {apps.map((app, index) => {
        return <AppCard key={index} app={app} />
      })}
    </div>
  )
}

const DesktopApps = () => {
  const apps: AppInfo[] = [
    {
      name: "image-editor-for-ebook",
      desc: "電子書籍の自作のため、スキャンした画像へのシンプルな画像処理を行う GUI アプリ",
      repoUrl: "https://github.com/nigimitama/image-editor-for-ebook",
      imageUrl:
        "https://github.com/nigimitama/image-editor-for-ebook/blob/master/README.assets/image-20230107154633566.png?raw=true",
    },
    {
      name: "Searchable PDF Maker",
      desc: "画像にOCRをかけて検索可能なPDFを作成するデスクトップアプリ",
      repoUrl: "https://github.com/nigimitama/searchable-pdf-maker",
      imageUrl: "https://github.com/nigimitama/searchable-pdf-maker/raw/main/images/app.png",
    },
    {
      name: "Dimmer",
      desc: "PC に接続された全てのディスプレイの輝度を一元管理するアプリ。朝になったら自動的に明るく、夜になったら自動的に暗くなるようにスケジューリングしたりできる。",
      repoUrl: "https://github.com/nigimitama/dimmer",
      imageUrl: "https://github.com/nigimitama/dimmer/raw/master/assets/image-20230425111150621.png",
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {apps.map((app, index) => {
        return <AppCard key={index} app={app} />
      })}
    </div>
  )
}
