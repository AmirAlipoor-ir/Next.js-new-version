/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

async function getTickets() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  });

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.slice(0,10).map((ticket: any) => (
        <div key={ticket.id}>
          <Link href={`/ticket/${ticket.id}`}>
            <div className="border-2 border-violet-400 p-2 rounded-md mb-3">
              <h4>{ticket.title}</h4>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
