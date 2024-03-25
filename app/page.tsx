import { Icon } from "@/components/_ui/icon";
import { folder, prompt } from "@/public/assets/images";
import Image from "next/image";

export default function Home() {
  const icons = [
    {
      id: 1,
      title: 'About',
      image: <Image src={prompt} alt="About" />
    },
    {
      id: 2,
      title: 'Skills',
      image: <Image src={folder} alt="Skills" />
    },
    {
      id: 3,
      title: 'Projects',
      image: <Image src={folder} alt="Projects" />
    }
  ]
  return (
    <main className="p-5">
      <div className="flex flex-col gap-5">
        {icons.map((icon, i) => (
          <Icon key={i} title={icon.title} href={''} iconImg={icon.image} />
        ))}
      </div>
    </main>
  );
}
