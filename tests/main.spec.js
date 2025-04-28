import { describe, it, expect, beforeEach } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import { astroWeightCalculator, addPlanetOptions } from '../src/main.js';
import planetData from '../src/expected-planets';
import q from 'fs';
import path from 'path';

beforeEach(() => {
  const htmlPath = path.resolve(__dirname, '../public/index.html');
  const html = fs.readFileSync(htmlPath, 'utf-8');
  document.body.innerHTML = html;

  // Populate dropdown after HTML is loaded
  addPlanetOptions();

  // Attach event listener manually
  document.getElementById('calculate-button').addEventListener('click', astroWeightCalculator);
});

describe('Astro Weight Calculator - Basic Elements', () => {
  it('should have an <input> with id="user-weight"', () => {
    const input = document.getElementById('user-weight');
    expect(input).toBeTruthy();
    expect(input.tagName.toLowerCase()).toBe('input');
  });

  it('should have a <select> with id="planets"', () => {
    const select = document.getElementById('planets');
    expect(select).toBeTruthy();
    expect(select.tagName.toLowerCase()).toBe('select');
  });

  it('should have a <p> with id="output"', () => {
    const output = document.getElementById('output');
    expect(output).toBeTruthy();
    expect(output.tagName.toLowerCase()).toBe('p');
  });

  it('should have a <button> with id="calculate-button"', () => {
    const button = document.getElementById('calculate-button');
    expect(button).toBeTruthy();
    expect(button.tagName.toLowerCase()).toBe('button');
  });
});

describe('Astro Weight Calculator - Behavior Checks', () => {
  planetData.forEach(([planetName, gravity]) => {
    it(`should calculate correct weight for ${planetName}`, async () => {
      const weightInput = document.getElementById('user-weight');
      const planetsSelect = document.getElementById('planets');
      const output = document.getElementById('output');
      const calculateButton = document.getElementById('calculate-button');

      fireEvent.input(weightInput, { target: { value: '100' } });
      fireEvent.change(planetsSelect, { target: { value: planetName } });
      fireEvent.click(calculateButton);

      await new Promise((r) => setTimeout(r, 10)); // Allow time for DOM update

      const expectedWeight = (gravity * 100).toFixed(2).replace(/\.00$/, '');
      const expectedText = `If you were on ${planetName}, you would weigh ${expectedWeight}lbs!`;

      const actualText = output?.innerText?.trim();
      expect(actualText).toBe(expectedText);
    });
  });
});
