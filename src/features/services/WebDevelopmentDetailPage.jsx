import { servicesBySlug } from "../../data/services";
import ServiceDetailPage from "./ServiceDetailPage";

export default function WebDevelopmentDetailPage() {
  return <ServiceDetailPage service={servicesBySlug.web} />;
}
