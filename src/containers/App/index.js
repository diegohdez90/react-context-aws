import React, { useState, useEffect } from 'react'
import UserCreate from '../../components/UserCreate';
// import LanguageContext from '../../contexts/LanguageContext';

import { LanguageStore } from '../../contexts/LanguageContext';

import ColorContext from '../../contexts/ColorContext';
import LanguageSelector from '../../components/LanguageSelector';

import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Heading,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listTodos as listNotes } from "../../graphql/queries";
import {
  createTodo as createNoteMutation,
  deleteTodo as deleteNoteMutation,
} from "../../graphql/mutations";

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listTodos.items;
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
    };
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    //event.target.reset();

    console.log(event);
  }

  async function deleteNote({ id }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

    return (
      <View className="App">
          <Heading level={1}>We now have Auth!</Heading>
        <div className="ui container">
          <LanguageStore>
            <LanguageSelector />
            <ColorContext.Provider value="red">
              <UserCreate notes={notes} createNote={createNote} deleteNote={deleteNote} />
            </ColorContext.Provider>
          </LanguageStore>
        </div>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
    );

}

export default withAuthenticator(App);
