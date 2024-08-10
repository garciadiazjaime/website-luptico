import { logos } from "@/components/socialLinks";

export default function FollowUS() {
  return (
    <section
      style={{
        margin: "40px 0",
      }}
    >
      <h2 style={{ color: "black" }}>Follow us on</h2>
      <a
        href="https://www.instagram.com/luptico/"
        target="_blank"
        style={{ marginTop: 12, display: "block" }}
      >
        {logos.instagram}
      </a>
    </section>
  );
}
