// app/company/page.tsx
// 旧 /company は About に統合済み。SEO・既存リンクのために 301 相当のリダイレクトを返す。
import { redirect } from "next/navigation";

export const metadata = {
  alternates: { canonical: "/aboutus" },
  robots: { index: false, follow: true },
};

export default function CompanyPage() {
  redirect("/aboutus");
}
