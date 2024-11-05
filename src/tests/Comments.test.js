import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import CommentsPage from '@/views/CommentsPage.vue';

describe('CommentsPage.vue', () => {
  let wrapper;

  beforeEach(async () => {
    // Estableix un mock global per fetch
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
    // Espera que el component s’hagi actualitzat
    await wrapper.vm.$nextTick();
  });

  afterEach(() => {
    // Neteja el mock després de cada test
    vi.resetAllMocks();
  });

  // Eliminem la prova d'estat de càrrega inicial

  it('hauria de renderitzar els comentaris després de fer el fetch', async () => {
    // Espera que es resolgui la promesa de fetch
    await wrapper.vm.$nextTick();

    // Verifica que s'hagi fet la crida a fetch
    expect(global.fetch).toHaveBeenCalled();

    // Verifica que es renderitzen els comentaris
    expect(wrapper.findAll('.comment-card').length).toBe(2);
    expect(wrapper.find('.comment-name').text()).toBe('John Doe');
  });
});