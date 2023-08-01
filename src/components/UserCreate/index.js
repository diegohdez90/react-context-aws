import React, {useContext} from 'react'
import LanguageContext from '../../contexts/LanguageContext';
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";

const UserCreate = ({
  notes,
  createNote,
  deleteNote,
}) => {

   const contextType = useContext(LanguageContext);

    return (
      <div className="ui form">
        <View as="form" margin="3rem 0" onSubmit={createNote}>
          <Flex direction="row" justifyContent="center">
            <TextField
              name="name"
              placeholder={`${contextType.language === 'en' ? 'Note name' : 'Nombre de la nota'}`}
              label={`${contextType.language === 'en' ? 'Note name' : 'Nombre de la note'}`}
              labelHidden
              variation="quiet"
              required
            />
            <TextField
              name="description"
              placeholder={`${contextType.language === 'en' ? 'Description Note' : 'Descripcion de la nota'}`}
              label={`${contextType.language === 'en' ? 'Description Note' : 'Descripcion de la nota'}`}
              labelHidden
              variation="quiet"
              required
            />
            <Button type="submit" variation="primary">
              {`${contextType.language === 'en' ? 'Create Note' : 'Crear nota'}`}
            </Button>
          </Flex>
        </View>
        <Heading level={2}>{`${contextType.language === 'en' ? 'Note list' : 'Lista de Notas'}`}</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            <Button variation="link" onClick={() => deleteNote(note)}>
              {`${contextType.language === 'en' ? 'Delete Note' : 'Eliminar Nota'}`}
            </Button>
          </Flex>
        ))}
      </View>
      </div>
    );
}

export default UserCreate;
