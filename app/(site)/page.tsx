import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";

export const revalidate = 0; // this page wont be cached and will be up to date
export default async function Home() {
  const songs = await getSongs();
  return (
    <div className=" bg-neutral-900 h-full w-full rounded-md overyflow-y-auto overflow-hidden">
      <Header>
        <div className=" mb-3">
          <h1 className=" tracking-wider text-white text-3xl font-light uppercase">
            Welcome Back!
          </h1>
          <div
            className=" grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4"
          >
            <ListItem
              image="/images/liked.png"
              name="Liked Songs"
              href="liked"
            />
          </div>
        </div>
      </Header>

      <div className=" mt-2 mb-7 p-6">
        <div className=" flex items-center justify-between">
          <h1 className=" text-white text-2xl font-light uppercase tracking-widest">
            Newest Songs
          </h1>
        </div>
        <div>
         <PageContent songs={songs}/>
        </div>
      </div>
    </div>
  );
}
