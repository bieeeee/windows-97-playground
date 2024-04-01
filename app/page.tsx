import { Icon } from "@/components/_ui/icon";
import { Calculator, Folder, Github, Globe, Linkedin, Prompt, Velog } from "@/public/assets/images";

export default function Home() {
  const icons = [
    {
      id: 1,
      title: 'About',
      image: Prompt,
      href: '/'
    },
    {
      id: 2,
      title: 'Skills',
      image: Folder,
      href: '/'
    },
    {
      id: 3,
      title: 'Projects',
      image: Folder,
      href: '/'
    },
    {
      id: 4,
      title: 'Github',
      image: Github,
      href: '/'
    },
    {
      id: 5,
      title: 'LinkedIn',
      image: Linkedin,
      href: '/'
    },
    {
      id: 6,
      title: 'Blog',
      image: Velog,
      href: '/'
    },
    {
      id: 7,
      title: 'Calculator',
      image: Calculator,
      href: '/'
    },
    {
      id: 8,
      title: 'Map',
      image: Globe,
      href: '/map'
    }
  ]
  return (
    <main className="m-5">
      <div className="flex flex-col gap-5">
        {icons.map((icon, i) => (
          <Icon key={i} title={icon.title} href={icon.href} image={icon.image} />
        ))}
      </div>
    </main>
  );
}
