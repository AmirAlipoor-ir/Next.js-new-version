import Link from "next/link";

async function getTicket(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function TicketDetails({ params }: any) {
  const ticket = await getTicket(params.id);
  console.log(ticket);

  return (
    <>
      <div className="flex flex-col border-4 p-2 rounded-md border-violet-600">
        <h1>id: {ticket.id}</h1>
        <h1>title: {ticket.title}</h1>
        <h5>information: {ticket.body}</h5>
      </div>
      <Link className="border-4 border-red-600 rounded-md mt-2 p-2" href="/ticket">go to tickets</Link>
    </>
  );
}
