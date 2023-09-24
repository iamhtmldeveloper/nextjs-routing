import Link from "next/link";

const projectList = () => {
  return (
    <main>
      <h1>projectList</h1>
      <ul>
        <li>
          <Link href="/projects/jobit">JobIt</Link>
        </li>
        <li>
          <Link href="/projects/carrent">Car Rent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">Hipnode</Link>
        </li>
      </ul>
    </main>
  );
};

export default projectList;
