import { FaGithub, FaLinkedin } from "react-icons/fa"
import Link from "@/components/Link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <div className="mb-8">
            <img
              src="/me.jpg"
              alt="三田匡能"
              width={150}
              height={150}
              className="rounded-full object-cover mx-auto mb-6 shadow-lg"
            />
            <h1 className="text-3xl md:text-3xl font-light mb-2">三田匡能</h1>
            <p className="text-gray-400 mb-2">Masayoshi Mita</p>
            <p className="text-gray-700 mb-8">
              Data Scientist at{" "}
              <Link href="https://aisc.ga-tech.co.jp/team/m_mita" className="text-blue-600 hover:underline">
                GA technologies
              </Link>
            </p>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              不動産企業の研究開発部門にてデータ分析やWebアプリケーション開発などを行っています。
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500">
              <Link href="https://www.linkedin.com/in/masayoshi-mita/" className="flex items-center gap-2 text-white">
                <FaLinkedin />
                LinkedIn
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50">
              <Link href="https://github.com/nigimitama" className="flex items-center gap-2 text-gray-700">
                <FaGithub />
                GitHub
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <Link
              href="/about"
              className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="font-semibold text-gray-900">About</div>
              <div className="text-gray-600">プロフィール</div>
            </Link>
            <Link
              href="/experience"
              className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="font-semibold text-gray-900">Experience</div>
              <div className="text-gray-600">職務実績</div>
            </Link>
            <Link
              href="/publications"
              className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="font-semibold text-gray-900">Publications</div>
              <div className="text-gray-600">論文・書籍など</div>
            </Link>
            <Link
              href="/lectures"
              className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="font-semibold text-gray-900">Lectures</div>
              <div className="text-gray-600">講義</div>
            </Link>
            <Link
              href="/apps"
              className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="font-semibold text-gray-900">Apps</div>
              <div className="text-gray-600">作ったもの</div>
            </Link>
            <Link
              href="/articles"
              className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="font-semibold text-gray-900">Articles</div>
              <div className="text-gray-600">ブログ記事など</div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
