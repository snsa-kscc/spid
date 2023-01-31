import NextHead from "next/head";

const Head = ({ title }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ""}</title>
    <meta name="description" content="SPID je Savez scenarista i pisaca izvedbenih djela, jedina umjetnička strukovna udruga u Hrvatskoj koja okuplja pisce i spisateljice izvedbenih djela Hrvatske – sve one koji pišu umjetnička djela za film, televiziju, kazalište, radio, internet, strip, računalne igre, izvedbene igre, nove medije i drugo!" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </NextHead>
)
  ;

export default Head;
