import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import "./Library.scss";
import LibraryItem from "./LibraryItem";
import * as LibraryTypes from "./Library.types";
import * as TranslatorActions from "../../store/actions/translator";
import {translate} from "../translator/Translator";
import * as TranslatorTypes from "../translator/Translator.types";

const mapState = (state: LibraryTypes.IState) => ({
  library: state.library
});

const Library = () => {
  const dispatch = useDispatch();
  const { library } = useMappedState(mapState);

  const selectMicheline = (value: string) => {
    dispatch({
      type: TranslatorActions.TRANSLATOR_SET_MODE,
      mode: TranslatorTypes.Modes.MICHELINEMICHELSON
    });

    dispatch({
      type: TranslatorActions.TRANSLATOR_SET_MICHELINE,
      translation: value
    });

    translate(TranslatorTypes.Modes.MICHELINEMICHELSON, value, dispatch)
  };

  const selectMichelson = (value: string) => {
    dispatch({
      type: TranslatorActions.TRANSLATOR_SET_MODE,
      mode: TranslatorTypes.Modes.MICHELSONMICHELINE
    });

    dispatch({
      type: TranslatorActions.TRANSLATOR_SET_MICHELSON,
      translation: value
    });

    translate(TranslatorTypes.Modes.MICHELSONMICHELINE, value, dispatch)
  };

  return (
    <div className="Library">
      {
        library.map((item, key) =>
          <LibraryItem selectMicheline={selectMicheline} selectMichelson={selectMichelson} data={item} key={`${item.source}${key}`} />
        )
      }
    </div>
  );
};

export default Library;
