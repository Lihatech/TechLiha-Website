import { servicesBySlug } from "../../data/services";
import ServiceDetailPage from "./ServiceDetailPage";

export default function CyberSecurityDetailPage() {
  return <ServiceDetailPage service={servicesBySlug["cyber-security"]} />;
}
