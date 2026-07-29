import { servicesBySlug } from "../../data/services";
import ServiceDetailPage from "./ServiceDetailPage";

export default function AwsDetailPage() {
  return <ServiceDetailPage service={servicesBySlug.aws} />;
}
