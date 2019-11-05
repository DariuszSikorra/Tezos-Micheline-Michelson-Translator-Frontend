import * as TranslatorTypes from './types';

export const TranslatorSetMode = (mode: TranslatorTypes.Modes): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_SET_MODE,
  mode: mode,
});

export const TranslatorFetchMichelsonToMicheline = (payload: string): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_FETCH_MICHELSON_TO_MICHELINE,
  payload: payload,
});

export const TranslatorFetchMichelineToMichelson = (payload: string): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_FETCH_MICHELINE_TO_MICHELSON,
  payload: payload,
});

export const TranslatorSetMichelson = (status: number, translation: string): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_SET_MICHELSON,
  status: status,
  translation: translation,
});

export const TranslatorSetMicheline = (status: number, translation: string): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_SET_MICHELINE,
  status: status,
  translation: translation,
});

export const TranslatorSetError = (error: string): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_SET_ERROR,
  error: error,
});

export const TranslatorFlushTranslation = (): TranslatorTypes.TranslatorActionTypes => ({
  type: TranslatorTypes.TRANSLATOR_FLUSH_TRANSLATION,
});
