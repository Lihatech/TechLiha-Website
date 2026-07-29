import { servicesBySlug } from "../../data/services";
import ServiceDetailPage from "./ServiceDetailPage";

export default function MobileAppDetailPage() {
  return <ServiceDetailPage service={servicesBySlug.mobile} />;
}
