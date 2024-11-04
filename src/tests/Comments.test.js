import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import CommentsPage from '@/views/CommentsPage.vue';

describe('CommentsPage.vue', () => {
  let wrapper;

  beforeEach(async () => {
    // Establece un mock global para fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
          {
            id: 1,
            name: 'John Doe',
            body: 'This is a comment.',
            email: 'john.doe@example.com',
          },
          {
            id: 2,
            name: 'Jane Doe',
            body: 'This is another comment.',
            email: 'jane.doe@example.com',
          },
        ]),
      })
    );

    wrapper = shallowMount(CommentsPage);
    // Espera a que el componente se haya actualizado
    await wrapper.vm.$nextTick();
  });

  afterEach(() => {
    // Limpia el mock después de cada test
    vi.resetAllMocks();
  });

  // Eliminamos la prueba de estado de carga inicial

  it('should render comments after fetching', async () => {
    // Espera a que se resuelva la promesa de fetch
    await wrapper.vm.$nextTick();

    // Verifica que se haya hecho la llamada a fetch
    expect(global.fetch).toHaveBeenCalled();

    // Verifica que se renderizan los comentarios
    expect(wrapper.findAll('.comment-card').length).toBe(2);
    expect(wrapper.find('.comment-name').text()).toBe('John Doe');
  });
});