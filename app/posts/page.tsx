import PostCard from "@/components/PostCard";

// Datos hardcodeados — misma estructura que usara Supabase
const posts = [
    {
        id: 1,
        titulo: 'Dev Frontend Senior',
        empresa: 'Google — Remoto',
        tipo: 'Empleo',
        tags: ['React', 'TypeScript', 'Next.js'],
        fecha: 'Publicado hace 2 dias',
    },
    {
        id: 2,
        titulo: 'App de gestion academica',
        empresa: 'Startup EdTech',
        tipo: 'Proyecto',
        tags: ['React Native', 'Node.js'],
        fecha: 'Publicado hace 5 dias',
    },
    {
        id: 3,
        titulo: 'Dev Backend',
        empresa: 'Amazon Web Services',
        tipo: 'Empleo',
        tags: ['Node.js', 'PostgreSQL', 'AWS'],
        fecha: 'Publicado hace 1 semana',
    },
];

export default function PostsPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold text-white mb-8">
                Publicaciones
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
        </main>
    );
}