alunos = [
  {nome: 'Pedro', disciplina: "Python"},
  {nome: 'Cathia', disciplina: 'C++'}
]

alunos.each do |aluno|
  puts("O aluno #{aluno[:nome]}")
  puts("faz curso de #{aluno[:disciplina]}")
end

