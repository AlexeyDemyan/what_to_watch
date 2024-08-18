import { AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../types/state";
import { Movie } from "../types/movie";
import { loadData, requireAuthorization } from "./action";
import { saveToken, dropToken } from "../services/token";
import { APIRoute, AuthStatuses } from "../const";
import { AuthData } from "../types/auth-data";
import { UserData } from "../types/user-data";

export const fetchMovieAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchMovie',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get
  }
)
