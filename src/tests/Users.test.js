import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import UsersPage from '@/views/UsersPage.vue';

// Simula el mòdul de axios
vi.mock('axios');

describe('UsersPage.vue', () => {
  let wrapper;

  beforeEach(async () => {
    // Configura el mock de axios amb la resposta desitjada
    axios.get.mockResolvedValue({
      data: {
        users: [
          { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', age: 30 },
          { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', age: 28 },
        ],
      },
    });

    // Monta el component i espera que la promesa es resolgui
    wrapper = shallowMount(UsersPage);
    await wrapper.vm.$nextTick();
  });

  afterEach(() => {
    // Neteja el mock després de cada prova
    vi.resetAllMocks();
  });

  it('hauria de renderitzar els la peticio dels usuaris', async () => {
    // Verifica que axios.get s'hagi cridat una vegada
    expect(axios.get).toHaveBeenCalledWith('https://dummyjson.com/users');

    // Verifica que es renderitzin els usuaris correctament
    const userCards = wrapper.findAll('.user-card');
    expect(userCards.length).toBe(2);

    // Verifica el contingut del primer usuari
    expect(userCards[0].find('.user-name').text()).toBe('John Doe');
    expect(userCards[0].find('.user-email').text()).toBe('Email: john.doe@example.com');
    expect(userCards[0].find('.user-age').text()).toBe('Edad: 30');

    // Verifica el contingut del segon usuari
    expect(userCards[1].find('.user-name').text()).toBe('Jane Doe');
    expect(userCards[1].find('.user-email').text()).toBe('Email: jane.doe@example.com');
    expect(userCards[1].find('.user-age').text()).toBe('Edad: 28');
  });
});