import { HomeSectionCards } from "@/components/home/HomeSectionCards";

/** H2 #11 — Why book a private transfer. Factual, specific benefits, not superlatives. */
export function HomePrivateTravelBenefits() {
  return (
    <HomeSectionCards
      eyebrow="Why a Private Transfer"
      heading="Why Book a Private Transfer in Saudi Arabia?"
      intro="Practical reasons travellers choose a private transfer over shared or on-demand rides for journeys across Saudi Arabia."
      tone="midnight"
      columns={4}
      cards={[
        {
          title: "Door-to-Door Transportation",
          body: "Collected from your exact address, hotel lobby, or arrivals hall — not a fixed pickup point. Airports, hotels, private addresses, and border crossings are all valid starting points.",
        },
        {
          title: "Pre-Booked Private Service",
          body: "The vehicle is yours for the whole trip — no route detours to drop other passengers first — with one quotation you confirm before you travel.",
        },
        {
          title: "Flexible Pickup and Drop-Off",
          body: "Flight tracking means your driver adjusts automatically to an early or delayed landing, so airport pickup timing is never left to guesswork.",
        },
        {
          title: "Travel for Families and Groups",
          body: "Vehicles sized to your group and bags, from a sedan for one or two travellers to a van or minibus for a full family or pilgrim group.",
        },
      ]}
    />
  );
}
