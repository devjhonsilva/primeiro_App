import React from "react";
import { Container, Icon, Person } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";

type Props = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon name="person" />
      <Person>{name}</Person>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}
