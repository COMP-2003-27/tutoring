export default function BlogCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="max-w-[410px] border p-2">
            <img
                className=""
                src="https://plus.unsplash.com/premium_photo-1684407617236-9baf926474ad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt=""
            />
            <h1 className="font-bold text-2xl">{title}</h1>
            <p>
                {description}
            </p>
        </div>
    );
}
