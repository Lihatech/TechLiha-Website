import { servicesBySlug } from "../../data/services";
import ServiceDetailPage from "./ServiceDetailPage";

export default function CloudMigrationDetailPage() {
  return <ServiceDetailPage service={servicesBySlug["cloud-migration"]} />;
}
