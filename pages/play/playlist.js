// import { getStaticProps } from "next/dist/build/templates/pages";
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch(',xacsscxw');
  const data = await res.json();

  return {
    props: { playlists: data },
  };
};

const PlayList = ({ playlists }) => {
  return (
    <div>
      <h1>This is my playlist</h1>
      {playlists.map((playlist) => (
        <Link href={'/play/' + playlist.id} key={playlist.id}>
         
            <h3>{playlist.name}</h3>
          
        </Link>
      ))}
    </div>
  );
};

export default PlayList;
