import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import Header from "./Header";
import { Calendar, Clock, Mail, Phone, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import FooterSection from "./FooterSection";
import { API_ENDPOINTS } from "@/lib/api";

const BookMeeting = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const calendlyUrl = "https://calendly.com/karthirajakl-98/30min";

  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (!e.data?.event?.startsWith("calendly")) return;

      if (e.data.event === "calendly.event_scheduled") {
        const eventData = e.data.payload;

        const bookingData = {
          firstName: eventData.invitee?.first_name || "",
          lastName: eventData.invitee?.last_name || "",
          email: eventData.invitee?.email || "",
          phone: eventData.invitee?.phone_number || "",
          meetingDate: eventData.event?.start_time
            ? new Date(eventData.event.start_time).toISOString().split("T")[0]
            : "",
          meetingTime: eventData.event?.start_time
            ? new Date(eventData.event.start_time).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "",
          meetingType: eventData.event_type?.name || "Consultation",
          timezone: eventData.event?.timezone || "",
          notes:
            eventData.invitee?.questions_and_answers
              ?.map((qa: any) => `${qa.question}: ${qa.answer}`)
              .join("\n") || "",
        };

        sendBookingNotification(bookingData);
      }
    };

    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, []);

  const sendBookingNotification = async (bookingData: any) => {
    try {
      const response = await fetch(API_ENDPOINTS.BOOKING, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        setBookingStatus({
          type: "success",
          message: "Meeting booked successfully! Confirmation email has been sent.",
        });
      } else {
        setBookingStatus({
          type: "error",
          message: data.message || "Failed to send booking confirmation.",
        });
      }
    } catch {
      setBookingStatus({
        type: "error",
        message: "Failed to send booking notification. Please contact us directly.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header
        scrollToSection={scrollToSection}
        setIsProductsOpen={setIsProductsOpen}
        isProductsOpen={isProductsOpen}
        variant="landing"
      />

      <main className="flex-1 mt-16">
        {/* Hero */}
        <section className="relative py-12 lg:py-20 bg-gradient-to-br from-background via-teal-950/5 to-cyan-950/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Book a <span className="text-primary">Free Consultation</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a time that works best for you.
            </p>
          </div>
        </section>

        {/* Main */}
        <section className="flex-1 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 min-h-[calc(100vh-8rem)]">

              {/* Calendly Column */}
              <div className="lg:col-span-2 flex flex-col">
                <Card className="flex flex-col flex-1 overflow-hidden border-border">

                  {bookingStatus && (
                    <div
                      className={`m-4 p-4 rounded ${
                        bookingStatus.type === "success"
                          ? "bg-green-500/10 text-green-600"
                          : "bg-red-500/10 text-red-600"
                      }`}
                    >
                      {bookingStatus.message}
                    </div>
                  )}

                  <div className="flex-1 calendly-inline-widget">
                    <InlineWidget
                      url={calendlyUrl}
                      styles={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "900px",
                        width: "100%",
                      }}
                    />
                  </div>

                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2"><Clock className="w-4" /> 30-minute call</li>
                    <li className="flex gap-2"><Calendar className="w-4" /> Product walkthrough</li>
                    <li className="flex gap-2"><Mail className="w-4" /> Custom proposal</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Contact</h3>
                  <p>contact@aazhamtechlabs.com</p>
                  <p>+1 (234) 567-890</p>
                </Card>
              </div>

            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default BookMeeting;
