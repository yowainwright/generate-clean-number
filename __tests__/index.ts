import {
  generateCleanNumber,
  filterNaNfromNumber,
} from '../index'

const scenarios = [
  {
    input: '12^~',
    output: 12,
  },
  {
    input: 13,
    output: 13,
  },
  {
    input: '1^2',
    output: 12,
  },
  {
    input: 14,
    output: 14,
  },
  {
    input: '14.1',
    output: 14.1,
  },
  {
    input: 14.1,
    output: 14.1,
  },
  {
    input: '14.1~',
    output: 14.1,
  },
  {
  input: '14.^1',
    output: 14.1,
  },
]

scenarios.forEach(function testScenario (scenario) {
  test(`test generateCleanNumber`, () => {
    const result = generateCleanNumber(scenario.input)
    expect(result).toBe(scenario.output)
  })

  test(`test filterNaNfromNumber`, () => {
    const result = filterNaNfromNumber(scenario.input)
    expect(result).toBe(scenario.output)
  })
})
