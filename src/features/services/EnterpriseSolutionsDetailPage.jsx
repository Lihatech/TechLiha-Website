import { servicesBySlug } from "../../data/services";
import ServiceDetailPage from "./ServiceDetailPage";

export default function EnterpriseSolutionsDetailPage() {
  return <ServiceDetailPage service={servicesBySlug["enterprise-solutions"]} />;
}
