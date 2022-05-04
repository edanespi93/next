import {Card, Grid, Row, Text} from "@nextui-org/react";
import {FC} from "react";
import {Result} from "../../interfaces/pokeType";
import {useRouter} from "next/router";

interface Props {
  pokemon: Result;
}

export const PokemonCard: FC<Props> = ({pokemon}) => {
  const {id, name, img} = pokemon;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card hoverable clickable onClick={handleClick}>
        <Card.Body css={{p: 1}}>
          <Card.Image src={img} width='100%' height={140} alt={name} />
        </Card.Body>
        <Card.Footer>
          <Row wrap='wrap' justify='space-between'>
            <Text b transform='capitalize'>
              {name}
            </Text>
            <Text b>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
