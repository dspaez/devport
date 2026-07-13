interface PostCardProps {
    id: number;
    titulo: string;
    empresa: string;
    tipo: string; // 'Empleo' | 'Proyecto'
    tags: string[];
    fecha?: string; // opcional — el ? lo marca
}

// 2. El componente — recibe las props tipadas
export default function PostCard({
    id,
    titulo,
    empresa,
    tipo,
    tags = [], // CORRECCIÓN 1: Si no llegan tags, por defecto será un arreglo vacío
    fecha,
}: PostCardProps) {
    return (
        <article className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:bg-slate-700 transition-colors border border-slate-700">
            {/* Badge de tipo: Empleo o Proyecto */}
            <div className="flex justify-between items-start mb-4">
                <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${tipo === 'Empleo'
                        ? 'bg-teal-500/20 text-teal-400'
                        : 'bg-purple-500/20 text-purple-400'
                        }`}
                >
                    {tipo}
                </span>
                {fecha && <span className="text-xs text-slate-500">{fecha}</span>}
            </div>

            {/* Titulo y empresa */}
            <h2 className="text-xl font-bold text-white mb-1">{titulo}</h2>
            <p className="text-slate-400 text-sm mb-4">{empresa}</p>

            {/* Tags de tecnologias */}
            <div className="flex flex-wrap gap-2 mb-5">
                {/* CORRECCIÓN 2: El '?' asegura que solo haga el map si tags existe */}
                {tags?.map((tag) => (
                    <span
                        key={tag}
                        className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Boton de accion */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors text-sm">
                Ver detalles &rarr;
            </button>
        </article>
    );
}