import { servicesBySlug } from "../../data/services";
import ServiceDetailPage from "./ServiceDetailPage";

export default function DevOpsDetailPage() {
  return <ServiceDetailPage service={servicesBySlug.devops} />;
}
