import Link from 'next/link';
import { BsPostcard } from 'react-icons/bs';
import { IoHome } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import LoginLayout from './LoginLayout';

export default function Aside({ asideOpen, handleAsideOpen }) {
  const router = useRouter();
  const [active, setActive] = useState('/');

  const handleLinkClick = (link) => {
    setActive(link);
  };

  useEffect(() => {
    setActive(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <LoginLayout>
        <aside className={asideOpen ? 'asideleft active' : 'asideleft'}>
          <ul className="">
            <Link href="/">
              <li className="navactive"><IoHome /> DashBoard</li>
            </Link>
            <li className={active === '/blogs' ? 'navactive flex-col flex-left' : 'flex-col flex-left'} onClick={() => handleLinkClick('/blogs')}>
              <div className="flex gap-1">
                <BsPostcard />
                Blogs
              </div>

              {active === '/blogs' && (
                <ul className="">
                  <Link href="/blogs">
                    <li className="navactive">All Blogs</li>
                  </Link>
                  <Link href="/blogs/addblog">
                    <li className="navactive">Add Blog</li>
                  </Link>
                  <Link href="/blogs/draft">
                    <li className="navactive">Draft Blog</li>
                  </Link>
                </ul>
              )}
            </li>

            <li className={active === '/projects' ? 'navactive flex-col flex-left' : 'flex-col flex-left'} onClick={() => handleLinkClick('/projects')}>
              <div className="flex gap-1">
                <BsPostcard />
                Projects
              </div>

              {active === '/projects' && (
                <ul className="">
                  <Link href="/projects">
                    <li className="navactive">All Projects</li>
                  </Link>
                  <Link href="/projects/addproject">
                    <li className="navactive">Add Project</li>
                  </Link>
                  <Link href="/projects/draft">
                    <li className="navactive">Draft Blog</li>
                  </Link>
                </ul>
              )}
            </li>

            <li className={active === '/gallery' ? 'navactive flex-col flex-left' : 'flex-col flex-left'} onClick={() => handleLinkClick('/gallery')}>
              <div className="flex gap-1">
                <BsPostcard />
                Gallery
              </div>

              {active === '/gallery' && (
                <ul className="">
                  <Link href="/gallery">
                    <li className="navactive">Gallery</li>
                  </Link>
                  <Link href="/gallery/addphoto">
                    <li className="navactive">Add Photos</li>
                  </Link>
                </ul>
              )}
            </li>
          </ul>
          <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
            <Link href="/logout">
              Logout
            </Link>
          </button>
        </aside>
      </LoginLayout>
    </>
  );
}