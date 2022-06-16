import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Ooops... 404</h1>
      <img src='/images/cog.png'></img>
      <h2>That page cannot be found</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  );
}
 
export default NotFound;