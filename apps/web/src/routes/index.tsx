import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Home,
});

function Home() {
	return <h1 className="bg-zinc-100">It works!</h1>;
}
