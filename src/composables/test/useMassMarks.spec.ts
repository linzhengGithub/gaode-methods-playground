import { describe, expect, it } from 'vitest'
import { useMassMarks } from '../useMassMarks'

describe('massMarks test group', () => {
  it('should be have massMarks', async () => {
    const { createMassMarks, massMarks } = useMassMarks()
    const data = [
      {
        lnglat: [116.397455, 39.909187],
        name: '天安门',
      },
      {
        lnglat: [116.402394, 39.937182],
        name: '南锣鼓巷',
      },
    ]
    createMassMarks(data as unknown as AMap.MassData[])

    expect(massMarks.value?.getData()).toEqual(data)
  })
})
