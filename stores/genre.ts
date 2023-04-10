import { defineStore } from 'pinia';
import { GenresModel } from '~/models';

export const useGenreStore = defineStore('genre', () => {
  const genres = ref<GenresModel[]>([]);
  const setGenres = (newGenres: GenresModel[]) => {
    genres.value = newGenres;
  };
  useGetGenresList({
    onSuccess: (data) => {
      if (!data?.isOk) {
        return;
      }
      setGenres(data.data);
    },
  });
  return { genres, setGenres };
});
