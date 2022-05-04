import { Image, useTheme, Spacer, Text, Link } from "@nextui-org/react";

import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: theme?.colors.gray900.value,
        alignItems: "center",

        flexDirection: "row",
        justifyContent: "start",
      }}
    >
      <Image
        width={70}
        height={70}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="noImage"
      />
      <NextLink passHref href="/">
        <Link>
          <Text h2 color="white">
            P
          </Text>
          <Text h3 color="white">
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white" style={{ marginRight: "10px" }}>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
