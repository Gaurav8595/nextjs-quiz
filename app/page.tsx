import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
    <h1>All Quiz</h1>
    <ul>
      <h2>this is link tag
        build with new 
      </h2>
      <li>
        <Link href="quiz/1" >Quiz 1</Link>
      </li>
      <li>
        <Link href="quiz/2" >Quiz 2</Link>
      </li>
      <li>
        <Link href="quiz/3" >Quiz 3</Link>
      </li>
    </ul>
    </section>
  )
}
