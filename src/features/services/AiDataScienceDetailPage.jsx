import { servicesBySlug } from "../../data/services";
import ServiceDetailPage from "./ServiceDetailPage";

export default function AiDataScienceDetailPage() {
  return <ServiceDetailPage service={servicesBySlug["ai-data-science"]} />;
}
