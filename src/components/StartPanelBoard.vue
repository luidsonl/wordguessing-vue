<script setup>
import { ref } from 'vue'
import { useGeneralStore } from '@/stores/GeneralStore';

const generalStore = useGeneralStore()

const rows = 12
const cols = 12

const start = ref({ row: 1, col: 1 })
const end = ref({ row: generalStore.getBoardWidth, col: generalStore.getBoardHeight })

let prevStart = { ...start.value };
let prevEnd = { ...end.value };

const isSelecting = ref(false)

function onAreaChange(dimensions) {
  const success = generalStore.setBoardDimensions(dimensions.width, dimensions.height);

  if (success) {
    prevStart = { ...start.value };
    prevEnd = { ...end.value };
  } else {
    start.value = { ...prevStart };
    end.value = { ...prevEnd };
  }
}

function startSelect(r, c) {
  isSelecting.value = true
  start.value = { row: r, col: c }
  end.value = { row: r, col: c }
}

function enterCell(r, c) {
  if (!isSelecting.value) return
  end.value = { row: r, col: c }
}

function stopSelect() {
  if (!isSelecting.value) return
  isSelecting.value = false
  
  const height = Math.abs(end.value.row - start.value.row) + 1
  const width = Math.abs(end.value.col - start.value.col) + 1
  onAreaChange({ width, height })
}

function isSelected(r, c) {
  const minRow = Math.min(start.value.row, end.value.row)
  const maxRow = Math.max(start.value.row, end.value.row)
  const minCol = Math.min(start.value.col, end.value.col)
  const maxCol = Math.max(start.value.col, end.value.col)

  return r >= minRow && r <= maxRow && c >= minCol && c <= maxCol
}

</script>

<template>
  <div class="space-y-4">
    <table
      class="w-full table-fixed border-collapse select-none"
      @mouseup="stopSelect"
      @mouseleave="stopSelect"
    >
      <tbody>
        <tr v-for="r in rows" :key="r">
          <td
            v-for="c in cols"
            :key="c"
            class="border p-0"
            @mousedown="startSelect(r,c)"
            @mouseenter="enterCell(r,c)"
          >
            <div
              class="aspect-square w-full transition"
              :class="isSelected(r,c) ? 'bg-blue-500' : 'bg-gray-200'"
            ></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>