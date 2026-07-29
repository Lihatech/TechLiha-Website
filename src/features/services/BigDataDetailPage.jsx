import { servicesBySlug } from "../../data/services";
import ServiceDetailPage from "./ServiceDetailPage";

export default function BigDataDetailPage() {
  return <ServiceDetailPage service={servicesBySlug["big-data"]} />;
}
