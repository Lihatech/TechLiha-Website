import { servicesBySlug } from "../../data/services";
import ServiceDetailPage from "./ServiceDetailPage";

export default function QaTestingDetailPage() {
  return <ServiceDetailPage service={servicesBySlug["qa-testing"]} />;
}
