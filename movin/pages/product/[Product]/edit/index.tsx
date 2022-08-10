//수정페이지
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import ProductWrite from "../../../../src/components/units/product/write/ProductWrite.container";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      useditemAddress {
        zipcode
        address
        addressDetail
        lng
        lat
      }
    }
  }
`;

export default function EditPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.Product },
  });

  console.log(data);

  return loading ? <></> : <ProductWrite isEdit={true} fetchData={data} />;
}
