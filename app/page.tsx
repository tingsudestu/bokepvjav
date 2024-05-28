import CardList from "@/components/card-list";
import { DEFAULT_PER_PAGE } from "@/lib/constants";
import SearchCardList from "@/components/search/search-list";
import { SITENAME } from "@/lib/constants";
export default async function Home({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const page =
        (searchParams.page && parseInt(searchParams.page as string)) || 2;
    const per_page =
        (searchParams.per_page && parseInt(searchParams.per_page as string)) ||
        DEFAULT_PER_PAGE;
    const fld_id =
        (searchParams.fld_id && (searchParams.fld_id as string)) || undefined;
    const query = (searchParams.q && (searchParams.q as string)) || undefined;

    return (
        <div className="md:my-2"><h1>{SITENAME}</h1><h2>Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru</h2>
            {query ? (
                <SearchCardList query={query} banner />
            ) : (
                <CardList page={page} per_page={per_page} fld_id={fld_id} />
            )}
            <!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "da94e4462ce94de0b6e2046f1d757c09"}'></script><!-- End Cloudflare Web Analytics -->
        </div>
    );
}
