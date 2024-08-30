numeros = [5, 3, 24, 6, 72, 7, 86, 54, 5, 97]
i = 0
valor = 0

while i < numeros.length
  valor = numeros[i] if numeros[i] > valor
  i += 1

end
puts valor